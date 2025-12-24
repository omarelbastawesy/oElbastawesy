import styles from "./About.module.css";
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
    <div className={styles.about}>
      <Container>
        <div dir={lang === "en" ? "ltr" : "rtl"} className={styles.container}>
          <h1 data-aos="fade-up" className={styles.head}>
            {t.about.head}
          </h1>
          <div className={styles.summary}>
            <h2 data-aos="fade-up" className={styles.header}>
              {t.about.summary.header}
            </h2>
            <p data-aos="fade-up" className={styles.info}>
              {t.about.summary.info}
            </p>
          </div>
          <div className={styles.experiance}>
            <h2 data-aos="fade-up" className={styles.header}>
              {t.about.experiance.header}
            </h2>
            <div data-aos="fade-up" className={styles.step}>
              <div className={styles.name}>
                <h4>
                  <Link href="/Web Development Challanger.pdf" target="_blank">
                    {t.about.experiance.stepA.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepA.date}</p>
              </div>
              <p className={styles.dis}>{t.about.experiance.stepA.dis}</p>
            </div>
            <div data-aos="fade-up" className={styles.step}>
              <div className={styles.name}>
                <h4>
                  <Link href="/responsive web design.png" target="_blank">
                    {t.about.experiance.stepB.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepB.date}</p>
              </div>
              <p className={styles.dis}>{t.about.experiance.stepB.dis}</p>
            </div>
            <div data-aos="fade-up" className={styles.step}>
              <div className={styles.name}>
                <h4>
                  <Link
                    href="/JavaScript Algorithms and Data Structures.pdf"
                    target="_blank"
                    className={styles.view}
                  >
                    {t.about.experiance.stepC.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepC.date}</p>
              </div>
              <p className={styles.dis}>{t.about.experiance.stepC.dis}</p>
            </div>
            <div data-aos="fade-up" className={styles.step}>
              <div className={styles.name}>
                <h4>
                  <Link
                    href="/learn PHP for beginners Udemy.pdf"
                    target="_blank"
                    className={styles.view}
                  >
                    {t.about.experiance.stepD.name}
                  </Link>
                </h4>
                <p>{t.about.experiance.stepD.date}</p>
              </div>
              <p className={styles.dis}>{t.about.experiance.stepD.dis}</p>
            </div>
          </div>
          <div className={styles.overView}>
            <h2 data-aos="fade-up" className={styles.header}>
              {t.about.overview.name}
            </h2>
            <div className={styles.cards}>
              <div data-aos="fade-up" className={`${styles.card} card`}>
                <FontAwesomeIcon
                  size="xl"
                  className={styles.icon}
                  icon={faCode}
                />
                <h3>
                  +
                  <CountUp
                    value={t.about.overview.cardA.value}
                    duration="1000"
                  />
                </h3>
                <h4>{t.about.overview.cardA.name}</h4>
              </div>
              <div data-aos="fade-up" className={`${styles.card} card`}>
                <FontAwesomeIcon
                  size="xl"
                  className={styles.icon}
                  icon={faPeopleGroup}
                />
                <h3>
                  +
                  <CountUp
                    value={t.about.overview.cardB.value}
                    duration="1000"
                  />
                </h3>
                <h4>{t.about.overview.cardB.name}</h4>
              </div>
              <div data-aos="fade-up" className={`${styles.card} card`}>
                <FontAwesomeIcon
                  size="xl"
                  className={styles.icon}
                  icon={faMicrochip}
                />
                <h3>
                  +
                  <CountUp
                    value={t.about.overview.cardC.value}
                    duration="1000"
                  />
                </h3>
                <h4>{t.about.overview.cardC.name}</h4>
              </div>
              <div data-aos="fade-up" className={`${styles.card} card`}>
                <FontAwesomeIcon
                  size="xl"
                  className={styles.icon}
                  icon={faBriefcase}
                />
                <h3>
                  +
                  <CountUp
                    value={t.about.overview.cardD.value}
                    duration="1000"
                  />
                </h3>
                <h4>{t.about.overview.cardD.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
