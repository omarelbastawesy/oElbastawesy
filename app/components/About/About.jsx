import Container from "../Global/container/Container";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { useLang } from "@/app/Data/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faMicrochip,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const CountUp = ({ value, duration }) => {
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let startTime = performance.now();

        function animate(time) {
          const progress = Math.min((time - startTime) / duration, 1);
          ref.current.textContent = Math.floor(progress * value);
          if (progress < 1) requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>0</span>;
};

export default function About() {
  const { t, lang } = useLang();

  return (
    <div className="w-full">
      <Container>
        <div
          dir={lang === "en" ? "ltr" : "rtl"}
          className="flex flex-col items-center justify-between gap-4"
        >
          <h1
            data-aos="fade-up"
            className="headAbout max-w-112.5 text-center max-[580px]:text-(--fs-h3)"
          >
            {t.about.head}
          </h1>
          <div>
            <h2
              data-aos="fade-up"
              className="headerAbout relative mb-4 w-fit rounded-lg border border-solid border-white bg-(--hi-color-bg) pr-4 pl-10 text-center before:absolute before:top-1/2 before:left-5 before:h-2.5 before:w-2.5 before:-translate-x-1.25 before:-translate-y-1.25 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00c6ff] before:content-[''] hover:[text-shadow:0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f7ff]"
            >
              {t.about.summary.header}
            </h2>
            <p
              data-aos="fade-up"
              className="py-4 pl-4 leading-10 max-[580px]:px-0 max-[580px]:py-2 max-[580px]:!text-[length:var(--fs-sm)] max-[580px]:leading-6"
            >
              {t.about.summary.info}
            </p>
          </div>
          <div className="w-full self-start pb-8">
            <h2
              data-aos="fade-up"
              className="headerAbout relative mb-4 w-fit rounded-lg border border-solid border-white bg-(--hi-color-bg) pr-4 pl-10 text-center before:absolute before:top-1/2 before:left-5 before:h-2.5 before:w-2.5 before:-translate-x-1.25 before:-translate-y-1.25 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00c6ff] before:content-[''] hover:[text-shadow:0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f7ff]"
            >
              {t.about.experiance.header}
            </h2>
            <div
              data-aos="fade-up"
              className="after:content[''] before:content[''] step relative pt-4 pb-4 pl-4 before:absolute before:bottom-0 before:left-0 before:z-1 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f6ff] before:transition before:duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-(--black)"
            >
              <div className="name flex gap-2">
                <h4 className="relative w-fit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
                  <Link href="/Web Development Challanger.pdf" target="_blank">
                    {t.about.experiance.stepA.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepA.date}</p>
              </div>
              <p className="dis">{t.about.experiance.stepA.dis}</p>
            </div>
            <div
              data-aos="fade-up"
              className="after:content[''] before:content[''] step relative pt-4 pb-4 pl-4 before:absolute before:bottom-0 before:left-0 before:z-1 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f6ff] before:transition before:duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-(--black)"
            >
              <div className="name flex gap-2">
                <h4 className="relative w-fit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
                  <Link href="/responsive web design.png" target="_blank">
                    {t.about.experiance.stepB.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepB.date}</p>
              </div>
              <p className="dis">{t.about.experiance.stepB.dis}</p>
            </div>
            <div
              data-aos="fade-up"
              className="after:content[''] before:content[''] step relative pt-4 pb-4 pl-4 before:absolute before:bottom-0 before:left-0 before:z-1 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f6ff] before:transition before:duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-(--black)"
            >
              <div className="name flex gap-2">
                <h4 className="relative w-fit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
                  <Link
                    href="/JavaScript Algorithms and Data Structures.pdf"
                    target="_blank"
                  >
                    {t.about.experiance.stepC.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepC.date}</p>
              </div>
              <p className="dis">{t.about.experiance.stepC.dis}</p>
            </div>
            <div
              data-aos="fade-up"
              className="after:content[''] before:content[''] step relative pt-4 pb-4 pl-4 before:absolute before:bottom-0 before:left-0 before:z-1 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:translate-y-1/2 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f6ff] before:transition before:duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-(--black)"
            >
              <div className="name flex gap-2">
                <h4 className="relative w-fit after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:after:w-full">
                  <Link
                    href="/learn PHP for beginners Udemy.pdf"
                    target="_blank"
                  >
                    {t.about.experiance.stepD.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepD.date}</p>
              </div>
              <p className="dis">{t.about.experiance.stepD.dis}</p>
            </div>
          </div>
          <div className="w-full self-start pb-16">
            <h2
              data-aos="fade-up"
              className="headerAbout relative mb-4 w-fit rounded-lg border border-solid border-white bg-(--hi-color-bg) pr-4 pl-10 text-center before:absolute before:top-1/2 before:left-5 before:h-2.5 before:w-2.5 before:-translate-x-1.25 before:-translate-y-1.25 before:rounded-full before:bg-[#00f7ff] before:shadow-[0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00c6ff] before:content-[''] hover:[text-shadow:0_0_5px_#00f7ff,0_0_10px_#00f7ff,0_0_20px_#00f7ff,0_0_40px_#00f7ff]"
            >
              {t.about.overview.name}
            </h2>
            <div className="flex w-full flex-wrap items-center justify-between gap-8 py-4">
              <div
                data-aos="fade-up"
                className="card flex min-w-2xs flex-auto flex-col items-center justify-center gap-1"
              >
                <FontAwesomeIcon size="xl" className="pb-1.5" icon={faCode} />
                <h3 className="text-(--fs-h2)">
                  +
                  <CountUp
                    value={t.about.overview.cardA.value}
                    duration="1000"
                  />
                </h3>
                <h4 className="text-(--fs-h3)">
                  {t.about.overview.cardA.name}
                </h4>
              </div>
              <div
                data-aos="fade-up"
                className="card flex min-w-2xs flex-auto flex-col items-center justify-center gap-1"
              >
                <FontAwesomeIcon
                  size="xl"
                  className="pb-1.5"
                  icon={faPeopleGroup}
                />
                <h3 className="text-(--fs-h2)">
                  +
                  <CountUp
                    value={t.about.overview.cardB.value}
                    duration="1000"
                  />
                </h3>
                <h4 className="text-(--fs-h3)">
                  {t.about.overview.cardB.name}
                </h4>
              </div>
              <div
                data-aos="fade-up"
                className="card flex min-w-2xs flex-auto flex-col items-center justify-center gap-1"
              >
                <FontAwesomeIcon
                  size="xl"
                  className="pb-1.5"
                  icon={faMicrochip}
                />
                <h3 className="text-(--fs-h2)">
                  +
                  <CountUp
                    value={t.about.overview.cardC.value}
                    duration="1000"
                  />
                </h3>
                <h4 className="text-(--fs-h3)">
                  {t.about.overview.cardC.name}
                </h4>
              </div>
              <div
                data-aos="fade-up"
                className="card flex min-w-2xs flex-auto flex-col items-center justify-center gap-1"
              >
                <FontAwesomeIcon
                  size="xl"
                  className="pb-1.5"
                  icon={faBriefcase}
                />
                <h3 className="text-(--fs-h2)">
                  +
                  <CountUp
                    value={t.about.overview.cardD.value}
                    duration="1000"
                  />
                </h3>
                <h4 className="text-(--fs-h3)">
                  {t.about.overview.cardD.name}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
