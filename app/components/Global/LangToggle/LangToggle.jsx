"use client";
import { useLang } from "../../../Data/LangContext";

export default function LangToggle() {
  const { lang, changeLang } = useLang();

  return (
    <button
      className="inline-flex cursor-pointer items-center rounded border-0 bg-[var(--primary)] px-[0.7rem] py-[0.2rem] text-[0.8rem] text-[var(--fs-sm)] text-[var(--white)] uppercase hover:opacity-75"
      onClick={() => changeLang(lang === "en" ? "ar" : "en")}
    >
      {lang === "en" ? "AR" : "EN"}
    </button>
  );
}
