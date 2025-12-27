import styles from "./Contact.module.css";
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
    <div className={styles.contact}>
      <Container>
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="flex flex-col items-center justify-between gap-8 py-8"
        >
          <p
            data-aos="zoom-in"
            className={`${styles.head} text-center max-w-[670px] !text-[length:var(--fs-h3)]`}
          >
            {t.contact.head}
          </p>
          <form
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            onSubmit={handleSubmit}
            method="post"
            className="flex items-start justify-between gap-4 flex-col w-full"
          >
            <div className="flex items-start justify-between gap-4 w-full flex-wrap">
              <div className="flex items-start justify-between flex-col flex-1 min-w-[280px] relative">
                <label htmlFor="name" className={styles.tag}>
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  className={styles.input}
                  autoComplete="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <p
                  style={{ height: `${errors.name ? "1.5rem" : "0rem"}` }}
                  className="h-0 overflow-hidden !text-[length:var(--fs-sm)] !text-red-600 pl-2.5 transition duration-1000"
                >
                  {t.contact.nameError}
                </p>
              </div>
              <div className="flex items-start justify-between flex-col flex-1 min-w-[280px] relative">
                <label htmlFor="email" className={styles.tag}>
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  className={styles.input}
                  autoComplete="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <p
                  style={{ height: `${errors.email ? "1.5rem" : "0rem"}` }}
                  className="h-0 overflow-hidden !text-[length:var(--fs-sm)] !text-red-600 pl-2.5 transition duration-1000"
                >
                  {t.contact.emailError}
                </p>
              </div>
              <div className="flex items-start justify-between flex-col flex-1 min-w-[280px] relative">
                <label htmlFor="phone" className={styles.tag}>
                  {t.contact.phoneLabel}
                </label>
                <input
                  id="phone"
                  name="phone"
                  className={styles.input}
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
                  className="h-0 overflow-hidden !text-[length:var(--fs-sm)] !text-red-600 pl-2.5 transition duration-1000"
                >
                  {t.contact.phoneError}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between flex-col flex-1 min-w-[280px] relative w-full">
              <label htmlFor="message" className={styles.tag}>
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                className="h-80 w-full min-h-12 resize-y rounded bg-[var(--card-bg)] border border-solid border-[var(--border)] shadow-[var(--shadow)] text-[var(--black)] text-[length:var(--fs-h4)] p-4 relative"
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>
            <button className={`py-2 px-4 text-[length:var(--fs-h4)] rounded text-[var(--black)] cursor-pointer ${styles.btn}`} type="submit">
              {t.contact.send}
            </button>
          </form>
          <div
            style={{ right: !success ? "-280px" : "1rem" }}
            className={`fixed bottom-25 max-w-70 shadow-[var(--shadow)] rounded pt-6 px-4 pb-4 -right-70 z-10 ${styles.success}`}
          >
            <FontAwesomeIcon
              onClick={() => setSuccess(false)}
              className={`absolute text-center cursor-pointer top-3 right-4 translate-x-[35%] -translate-y-[25%] ${styles.x}`}
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
