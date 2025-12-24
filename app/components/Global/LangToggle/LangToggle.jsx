"use client";
import { useLang } from "../../../Data/LangContext";
import styles from "./LangToggle.module.css"

export default function LangToggle() {
  const { lang, changeLang } = useLang();

  return (
    <button className={styles.btn} onClick={() => changeLang(lang === "en" ? "ar" : "en")}>
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
