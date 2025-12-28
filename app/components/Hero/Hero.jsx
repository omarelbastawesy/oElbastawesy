"use client";

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
    <div>
      <Container>
        <div className="relative flex min-h-0 min-h-[100vh] flex-col items-center justify-center gap-6 px-0 pt-19 pb-16 text-center">
          <div className="imgcon relative max-[580px]:mt-[0.8rem]">
            <div className="relative h-50 w-50 overflow-hidden rounded-full border-[0.2rem] border-solid border-[var(--primary)]">
              <Image
                alt="Hero Image"
                height={240}
                width={240}
                src={image}
                className="h-full w-full"
                priority
              />
            </div>
          </div>
          <div>
            <h2>{t.hero.name}</h2>
            <h3>{t.hero.title}</h3>
            <p className="max-w-200" dir={lang === "en" ? "ltr" : "rtl"}>
              {t.hero.dis}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Link
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-solid after:absolute after:h-full after:w-full after:rounded-full after:bg-[var(--hi-color)] after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-30"
              target="blank"
              href="https://www.facebook.com/omar.elbastawesy.2025"
              aria-label="facbook account"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-solid after:absolute after:h-full after:w-full after:rounded-full after:bg-[var(--hi-color)] after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-30"
              target="blank"
              href="https://www.instagram.com/omarelbastawese/"
              aria-label="instagram account"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-solid after:absolute after:h-full after:w-full after:rounded-full after:bg-[var(--hi-color)] after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-30"
              target="blank"
              href="https://www.linkedin.com/in/omar-elbastawesy/"
              aria-label="linkedin account"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-solid after:absolute after:h-full after:w-full after:rounded-full after:bg-[var(--hi-color)] after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-30"
              target="blank"
              href="https://github.com/omarelbastawesy"
              aria-label="github account"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </Link>
            <Link
              href="https://wa.me/201090336526"
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-solid after:absolute after:h-full after:w-full after:rounded-full after:bg-[var(--hi-color)] after:opacity-0 after:transition-all after:duration-300 after:content-[''] hover:after:opacity-30"
              target="blank"
              aria-label="whatsapp account"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/cv.pdf"
              download
              className="inline-flex cursor-pointer items-center gap-2 rounded border-0 bg-[var(--hi-color)] px-4 py-2 text-[length:var(--fs-sm)] font-medium !text-[var(--white)] uppercase hover:bg-[var(--hi-color-h)]"
              aria-label="download CV"
              dir={lang === "en" ? "ltr" : "rtl"}
            >
              {t.hero.dcv}
            </Link>
            <Link
              href="/cv.pdf"
              target="_blank"
              className="inline-flex cursor-pointer items-center gap-2 rounded border-0 bg-[var(--primary)] px-4 py-2 text-[length:var(--fs-sm)] font-medium !text-[var(--white)] uppercase hover:bg-[var(--primary-soft-h)]"
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
