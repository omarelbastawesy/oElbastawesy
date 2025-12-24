"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);
  // Change the theme when I click on button theme
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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.container}>
          <Logo />
          <div
            dir={lang === "ar" ? "rtl" : "ltr"}
            className={`${styles.navItems} ${openMenu ? styles.open : ""}`}
          >
            <Link
              onClick={() => setOpenMenu(false)}
              href="#about"
              className={styles.item}
            >
              {t.nav.about}
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="#skills"
              className={styles.item}
            >
              {t.nav.skills}
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="#projects"
              className={styles.item}
            >
              {t.nav.projects}
            </Link>
            <Link
              onClick={() => setOpenMenu(false)}
              href="#contact"
              className={styles.item}
            >
              {t.nav.contact}
            </Link>
          </div>
          <div className={`${styles.icons} ${styles.burgerMenu}`}>
            <FontAwesomeIcon
              ref={iconRef}
              onClick={() => setOpenMenu((prev) => !prev)}
              icon={openMenu ? faTimes : faBars}
              size="2x"
            />
          </div>
          <div className={styles.icons}>
            <LangToggle />
            <Theme />
          </div>
        </div>
      </Container>
    </div>
  );
}
