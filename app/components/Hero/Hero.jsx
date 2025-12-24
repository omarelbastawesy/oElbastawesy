"use client";

import styles from "./Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithubAlt,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "aos/dist/aos.css";
import image from "../../../public/hero.jpg";
import Container from "../Global/container/Container";
import Image from "next/image";
import { useLang } from "../../Data/LangContext";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.container}>
          <div className={styles.imgcon}>
            <div className={styles.heroImage}>
              <Image alt="Hero Image" height={250} width={250} src={image} className={styles.image} />
            </div>
          </div>
          <div className={styles.data}>
            <h2 className={styles.name}>{t.hero.name}</h2>
            <h3 className={styles.jobTitle}>{t.hero.title}</h3>
            <p className={styles.dis} dir={lang === "en" ? "ltr" : "rtl"}>
              {t.hero.dis}
            </p>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.link}
              target="blank"
              href="https://www.facebook.com/omar.elbastawesy.2025"
               aria-label="facbook account"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              className={styles.link}
              target="blank"
              href="https://www.instagram.com/omarelbastawese/"
               aria-label="instagram account"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className={styles.link}
              target="blank"
              href="https://www.linkedin.com/in/omar-elbastawesy/"
               aria-label="linkedin account"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              className={styles.link}
              target="blank"
              href="https://github.com/omarelbastawesy"
               aria-label="github account"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </Link>
            <Link
              href="https://wa.me/201090336526"
              className={styles.link}
              target="blank"
               aria-label="whatsapp account"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>
          <div className={styles.cv}>
            <Link
              href="/cv.pdf"
              download
              className={styles.download}
               aria-label="download CV"
              dir={lang === "en" ? "ltr" : "rtl"}
            >
              {t.hero.dcv}
            </Link>
            <Link
              href="/cv.pdf"
              target="_blank"
              className={styles.view}
               aria-label="view CV"
              dir={lang === "en" ? "ltr" : "rtl"}
            >
              {t.hero.vcv}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
