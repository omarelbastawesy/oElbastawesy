import styles from "./Projects.module.css";
import Container from "../Global/container/Container";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../Data/data/projects.json";
import { useState } from "react";
import { useLang } from "@/app/Data/LangContext";

export default function Projects() {
  const [data, setData] = useState(projectData);
  const [ative, setActive] = useState("all");
  const { t, lang } = useLang();

  const handleFilter = (type) => {
    setActive(type);

    if (type === "all") {
      setData(projectData);
    } else {
      setData(projectData.filter((i) => i.type === type));
    }
  };

  return (
    <div className={styles.projects}>
      <Container>
        <div className={styles.container}>
          <div data-aos="fade-up" className={styles.topbar}>
            <div
              onClick={() => handleFilter("all")}
              className={`${ative === "all" ? styles.selected : ""} ${
                styles.select
              }`}
            >
              ALL
            </div>
            <div
              onClick={() => handleFilter("html")}
              className={`${ative === "html" ? styles.selected : ""} ${
                styles.select
              }`}
            >
              HTML/CSS
            </div>
            <div
              onClick={() => handleFilter("js")}
              className={`${ative === "js" ? styles.selected : ""} ${
                styles.select
              }`}
            >
              JavaScript
            </div>
            <div
              onClick={() => handleFilter("react")}
              className={`${ative === "react" ? styles.selected : ""} ${
                styles.select
              }`}
            >
              React/Next
            </div>
          </div>
          <div className={styles.cards}>
            {data.map((ele) => {
              return (
                <div
                  key={ele.name}
                  className={styles.card}
                  data-aos="flip-left"
                >
                  <div className={styles.image}>
                    <Image
                      src={ele.bg}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt="image of project"
                    />
                  </div>
                  <div className={styles.data}>
                    <h3 className={styles.name}>{ele.name}</h3>
                    <p
                      dir={lang === "en" ? "ltr" : "rtl"}
                      className={styles.dis}
                    >
                      {lang === "en" ? ele.dis.en : ele.dis.ar}
                    </p>
                    <div className={styles.links}>
                      <Link
                        target="_blank"
                        href={ele.live}
                        className={styles.live}
                      >
                        LIVE DEMO
                      </Link>
                      <Link
                        target="_blank"
                        href={ele.repo}
                        className={styles.repo}
                      >
                        GITHUB
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
