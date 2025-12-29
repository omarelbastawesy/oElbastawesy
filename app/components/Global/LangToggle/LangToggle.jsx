"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../../../Data/LangContext";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
];

export default function LangDropdown() {
  const { lang, changeLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 rounded bg-[var(--primary)] px-3 py-1 text-[0.8rem] text-[var(--white)] uppercase hover:opacity-80"
      >
        {lang.toUpperCase()}
        <span className="text-xs">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-1 w-full rounded overflow-hidden bg-[var(--primary)] shadow-md ring-1 ring-black/10">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                changeLang(l.code);
                setOpen(false);
              }}
              className={`block w-full px-3 py-1 !text-center text-left text-sm text-[var(--white)] hover:bg-[var(--hi-color-h)] ${lang === l.code ? "bg-(--hi-color-h) font-bold" : ""} `}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
