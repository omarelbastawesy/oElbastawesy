import Container from "../Global/container/Container";
import Link from "next/link";
import { useLang } from "@/app/Data/LangContext";

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <div>
      <Container>
        <div>
          <div
            data-aos="fade-up"
            dir={lang === "ar" ? "rtl" : "ltr"}
            className="flex items-start justify-between gap-4 py-12"
          >
            <div>
              <h2>{t.footer.heads.follow}</h2>
              <div className="relative flex flex-col items-start justify-between px-2">
                <Link
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                  target="blank"
                  href="https://www.facebook.com/omar.elbastawesy.2025"
                >
                  {t.footer.links.facebook}
                </Link>
                <Link
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                  target="blank"
                  href="https://www.instagram.com/omarelbastawese/"
                >
                  {t.footer.links.instagram}
                </Link>
                <Link
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                  target="blank"
                  href="https://www.linkedin.com/in/omar-elbastawesy/"
                >
                  {t.footer.links.linkedin}
                </Link>
                <Link
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                  target="blank"
                  href="https://github.com/omarelbastawesy"
                >
                  {t.footer.links.github}
                </Link>
                <Link
                  href="https://wa.me/201090336526"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                  target="blank"
                >
                  {t.footer.links.whatsapp}
                </Link>
              </div>
            </div>
            <div>
              <h2>{t.footer.heads.sections}</h2>
              <div className="relative flex flex-col items-start justify-between px-2">
                <Link
                  href="#home"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.home}
                </Link>
                <Link
                  href="#about"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.about}
                </Link>
                <Link
                  href="#skills"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.skills}
                </Link>
                <Link
                  href="#projects"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.projects}
                </Link>
                <Link
                  href="#contact"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.contact}
                </Link>
              </div>
            </div>
            <div>
              <h2>{t.footer.heads.cv}</h2>
              <div className="relative flex flex-col items-start justify-between px-2">
                <Link
                  href="/cv.pdf"
                  download
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.downloadcv}
                </Link>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="after:content[''] relative text-[var(--black)] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--hi-color)] after:transition-all after:duration-500 hover:relative hover:text-[var(--hi-color)] hover:after:w-full"
                >
                  {t.footer.links.viewcv}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="bg-[var(--card-bg)] p-4 text-center shadow-[var(--shadow)]"
      >
        <p>{t.footer.links.copy}</p>
      </div>
    </div>
  );
}
