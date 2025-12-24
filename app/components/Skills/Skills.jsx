"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import Container from "../Global/container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const data = [
  { id: 1, name: "HTML", deg: 95, icon: faHtml5, hover: "#f16a30" },
  { id: 2, name: "CSS", deg: 90, icon: faCss3, hover: "#2a6bf2" },
  { id: 3, name: "JavaScript", deg: 87, icon: faJs, hover: "#f7e024" },
  { id: 4, name: "React.js", deg: 75, icon: faReact, hover: "#66dbfb" },
  { id: 5, name: "Sass", deg: 90, icon: faSass, hover: "#cf6c9c" },
  { id: 6, name: "Bootstrap", deg: 85, icon: faBootstrap, hover: "#8819fd" },
  { id: 7, name: "Git", deg: 80, icon: faGit, hover: "#f05639" },
  { id: 8, name: "GitHub", deg: 90, icon: faGithub, hover: "#22262a" },
];

export default function Skills() {
  const refs = useRef([]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setActive((prev) => (prev.includes(id) ? prev : [...prev, id]));
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skills}>
      <Container>
        <div className={styles.container}>
          {data.map((e, i) => {
            const isActive = active.includes(String(e.id));

            return (
              <div
                data-aos="fade-up"
                key={e.id}
                data-id={e.id}
                ref={(el) => (refs.current[i] = el)}
                style={{
                  "--hover-color": e.hover,
                  "--deg": isActive ? e.deg : 0,
                }}
                className={styles.skill}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={e.icon}
                  size="4x"
                />

                <div className={styles.process}>
                  <h2 className={styles.name}>{e.name}</h2>

                  <div
                    className={styles.bar}
                    data-value={`${isActive ? e.deg : 0}%`}
                  >
                    <div className={styles.line}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
