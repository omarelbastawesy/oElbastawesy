import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(11),
  message: z.string().optional(),
});
