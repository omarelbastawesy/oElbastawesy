import Container from "../Global/container/Container";
import { useState } from "react";
import { contactSchema } from "./contactSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/app/Data/LangContext";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { t, lang } = useLang();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      // ✅ CLEAR FORM
      setSuccess(true);
      setForm(initialForm);
    }
  };

  return (
    <div>
      <Container>
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="flex flex-col items-center justify-between gap-8 py-8"
        >
          <p
            data-aos="zoom-in"
            className="headContact max-w-[670px] text-center !text-[length:var(--fs-h3)]"
          >
            {t.contact.head}
          </p>
          <form
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            onSubmit={handleSubmit}
            method="post"
            className="flex w-full flex-col items-start justify-between gap-4"
          >
            <div className="flex w-full flex-wrap items-start justify-between gap-4">
              <div className="relative flex min-w-[280px] flex-1 flex-col items-start justify-between">
                <label htmlFor="name" className="pl-4">
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  className="relative h-12 w-full rounded-sm border border-solid border-[var(--border)] bg-[var(--card-bg)] px-4 text-[length:var(--fs-h4)] text-[var(--black)] shadow-[var(--shadow)] hover:outline hover:outline-[var(--hi-color-h)] hover:outline-solid focus:outline-2 focus:outline-[var(--hi-color)] focus:outline-solid focus:placeholder:text-transparent"
                  autoComplete="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <p
                  style={{ height: `${errors.name ? "1.5rem" : "0rem"}` }}
                  className="h-0 overflow-hidden pl-2.5 !text-[length:var(--fs-sm)] !text-red-600 transition duration-1000"
                >
                  {t.contact.nameError}
                </p>
              </div>
              <div className="relative flex min-w-[280px] flex-1 flex-col items-start justify-between">
                <label htmlFor="email" className="pl-4">
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  className="relative h-12 w-full rounded-sm border border-solid border-[var(--border)] bg-[var(--card-bg)] px-4 text-[length:var(--fs-h4)] text-[var(--black)] shadow-[var(--shadow)] hover:outline hover:outline-[var(--hi-color-h)] hover:outline-solid focus:outline-2 focus:outline-[var(--hi-color)] focus:outline-solid focus:placeholder:text-transparent"
                  autoComplete="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <p
                  style={{ height: `${errors.email ? "1.5rem" : "0rem"}` }}
                  className="h-0 overflow-hidden pl-2.5 !text-[length:var(--fs-sm)] !text-red-600 transition duration-1000"
                >
                  {t.contact.emailError}
                </p>
              </div>
              <div className="relative flex min-w-[280px] flex-1 flex-col items-start justify-between">
                <label htmlFor="phone" className="pl-4">
                  {t.contact.phoneLabel}
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="relative h-12 w-full rounded-sm border border-solid border-[var(--border)] bg-[var(--card-bg)] px-4 text-[length:var(--fs-h4)] text-[var(--black)] shadow-[var(--shadow)] hover:outline hover:outline-[var(--hi-color-h)] hover:outline-solid focus:outline-2 focus:outline-[var(--hi-color)] focus:outline-solid focus:placeholder:text-transparent"
                  autoComplete="tel"
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  value={form.phone}
                  onChange={handleChange}
                  required
                  dir={lang === "en" ? "ltr" : "rtl"}
                />
                <p
                  style={{ height: `${errors.phone ? "1.5rem" : "0rem"}` }}
                  className="h-0 overflow-hidden pl-2.5 !text-[length:var(--fs-sm)] !text-red-600 transition duration-1000"
                >
                  {t.contact.phoneError}
                </p>
              </div>
            </div>
            <div className="relative flex w-full min-w-[280px] flex-1 flex-col items-start justify-between">
              <label htmlFor="message" className="pl-4">
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                className="relative h-80 min-h-12 w-full resize-y rounded border border-solid border-[var(--border)] bg-[var(--card-bg)] p-4 text-[length:var(--fs-h4)] text-[var(--black)] shadow-[var(--shadow)] hover:outline-1 hover:outline-[var(--hi-color-h)] hover:outline-solid focus:bg-[var(--card-bg-h)] focus:outline-2 focus:outline-[var(--hi-color)] focus:outline-solid focus:placeholder:text-transparent"
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>
            <button
              className="cursor-pointer rounded border-[var(--border)] bg-[var(--hi-color)] px-4 py-2 text-[length:var(--fs-h4)] text-[var(--black)] hover:bg-[var(--hi-color-h)]"
              type="submit"
            >
              {t.contact.send}
            </button>
          </form>
          <div
            style={{ right: !success ? "-280px" : "1rem" }}
            className="fixed -right-70 bottom-25 z-10 max-w-70 rounded px-4 pt-6 pb-4 shadow-[var(--shadow)]"
          >
            <FontAwesomeIcon
              onClick={() => setSuccess(false)}
              className="absolute top-3 right-4 translate-x-[35%] -translate-y-[25%] cursor-pointer border border-solid border-[var(--border)] bg-[var(--card-bg)] text-center"
              icon={faX}
              size="sm"
            />
            <p>{t.contact.success}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
