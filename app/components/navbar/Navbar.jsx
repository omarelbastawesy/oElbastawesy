"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Global/container/Container";
import Theme from "../Global/theme/theme";
import Logo from "../Global/logo/Logo";
import Link from "next/link";
import LangToggle from "../Global/LangToggle/LangToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "../../Data/LangContext";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { t, lang } = useLang();

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  // Close when clicking outside menu BUT NOT the burger icon
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="fixed z-100 w-full bg-[var(--card-bg)] shadow-[var(--shadow)]">
      <Container>
        <div className="relative flex items-center justify-between gap-8 py-2">
          <Logo />
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            ref={menuRef}
            className={`flex h-15 w-fit items-center justify-evenly gap-3 py-4 max-[610px]:absolute max-[610px]:top-14 max-[610px]:z-1 max-[610px]:h-0 max-[610px]:w-full max-[610px]:flex-col max-[610px]:overflow-hidden max-[610px]:bg-[var(--bg-secondary)] max-[610px]:p-0 max-[610px]:shadow-[var(--shadow)] ${openMenu ? "h-58! rounded-b-lg pb-1.5" : ""}`}
          >
            <Link
              onClick={() => setOpenMenu(false)}
              href="#about"
              className="h-fit rounded border border-solid border-[var(--bg-secondary)] bg-[var(--card-bg)] px-1.75 shadow-[var(--shadow)]"
            >
              {t.nav.about}
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="#skills"
              className="h-fit rounded border border-solid border-[var(--bg-secondary)] bg-[var(--card-bg)] px-1.75 shadow-[var(--shadow)]"
            >
              {t.nav.skills}
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="#projects"
              className="h-fit rounded border border-solid border-[var(--bg-secondary)] bg-[var(--card-bg)] px-1.75 shadow-[var(--shadow)]"
            >
              {t.nav.projects}
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="#contact"
              className="h-fit rounded border border-solid border-[var(--bg-secondary)] bg-[var(--card-bg)] px-1.75 shadow-[var(--shadow)]"
            >
              {t.nav.contact}
            </Link>
          </div>
          <div className="hidden cursor-pointer items-center max-[610px]:block!">
            <FontAwesomeIcon
              ref={iconRef}
              onClick={() => setOpenMenu((prev) => !prev)}
              icon={openMenu ? faTimes : faBars}
              size="2x"
            />
          </div>
          <div className="flex items-center gap-4">
            <LangToggle />
            <Theme />
          </div>
        </div>
      </Container>
    </div>
  );
}
