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
        <div dir={lang === "en" ? "ltr" : "rtl"} className={styles.container}>
          <p data-aos="zoom-in" className={styles.head}>
            {t.contact.head}
          </p>
          <form
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            onSubmit={handleSubmit}
            method="post"
            className={styles.form}
          >
            <div className={styles.data}>
              <div className={`${styles.dis} ${styles.name}`}>
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
                  className={styles.error}
                >
                  {t.contact.nameError}
                </p>
              </div>
              <div className={`${styles.dis} ${styles.mail}`}>
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
                  className={styles.error}
                >
                  {t.contact.emailError}
                </p>
              </div>
              <div className={`${styles.dis} ${styles.phone}`}>
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
                  className={styles.error}
                >
                  {t.contact.phoneError}
                </p>
              </div>
            </div>
            <div className={`${styles.dis} ${styles.massage}`}>
              <label htmlFor="message" className={styles.tag}>
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.msg}
                autoComplete="off"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
              <p className={styles.error}></p>
            </div>
            <button className={styles.btn} type="submit">
              {t.contact.send}
            </button>
          </form>
          <div
            style={{ right: !success ? "-280px" : "1rem" }}
            className={styles.success}
          >
            <FontAwesomeIcon
              onClick={() => setSuccess(false)}
              className={styles.x}
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
