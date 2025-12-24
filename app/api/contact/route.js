import { contactSchema } from "../../components/Contact/contactSchema";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return new Response(
        JSON.stringify({ errors: result.error.flatten().fieldErrors }),
        { status: 400 }
      );
    }

    const { name, email, phone, message } = result.data;

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "omarelbastawesy1@gmail.com",
      replyTo: email,
      subject: "Contact From My Website",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to send message", { status: 500 });
  }
}
