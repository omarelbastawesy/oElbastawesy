"use client";
import { useEffect, useRef, useState } from "react";
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
      { threshold: 0.5 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Container>
        <div className="flex flex-col gap-4 py-8">
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
                className="group flex gap-8 rounded-xl border border-solid border-[var(--border)] bg-[var(--card-bg)] p-8 shadow-[var(--shadow)] max-[580px]:flex-col max-[580px]:items-center max-[580px]:justify-between"
              >
                <FontAwesomeIcon
                  className="group-hover:text-[var(--hover-color)]"
                  icon={e.icon}
                  size="4x"
                />

                <div className="flex flex-1 flex-col gap-3 max-[580px]:w-full">
                  <h2>{e.name}</h2>

                  <div
                    className="relative h-5 w-full rounded-[10px] bg-[#e5e7eb] before:absolute before:bottom-8 before:left-[calc(var(--deg)*1%)] before:z-[2] before:flex before:h-[28px] before:w-[42px] before:-translate-x-1/2 before:items-center before:justify-center before:rounded-[6px] before:bg-[var(--hi-color)] before:text-[13px] before:font-bold before:text-[var(--primary)] before:transition-[left] before:duration-1000 before:ease-linear before:content-[attr(data-value)] after:absolute after:bottom-5 after:left-[calc(var(--deg)*1%)] after:-translate-x-1/2 after:border-t-[15px] after:border-r-[5px] after:border-l-[5px] after:border-t-[var(--hi-color)] after:border-r-transparent after:border-l-transparent after:transition-[left] after:duration-1000 after:ease-linear after:content-['']"
                    data-value={`${isActive ? e.deg : 0}%`}
                  >
                    <div className="relative h-full w-[calc(var(--deg)*1%)] rounded-[10px] bg-[var(--hi-color-h)] shadow-[0_0_2px_0_var(--hi-color-h),0_0_4px_var(--hi-color-h),0_0_7px_var(--hi-color-h),0_0_10px_var(--hi-color-h)] transition-all duration-1000 ease-linear"></div>
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
