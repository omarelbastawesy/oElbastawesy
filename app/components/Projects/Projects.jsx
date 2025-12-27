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
    <div>
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 py-8 ">
          <div
            data-aos="fade-up"
            className="flex items-center justify-between gap-4 max-[580px]:grid max-[580px]:grid-cols-[repeat(2,auto)] max-[580px]:justify-center max-[580px]:gap-4 max-[580px]:text-center"
          >
            <div
              onClick={() => handleFilter("all")}
              className={`${ative === "all" ? "bg-[var(--hi-color)]" : ""} cursor-pointer rounded-[0.3rem] border border-solid border-[var(--border)] bg-[var(--card-bg)] px-[0.8rem] hover:bg-[var(--hi-color)]`}
            >
              ALL
            </div>
            <div
              onClick={() => handleFilter("html")}
              className={`${ative === "html" ? "bg-[var(--hi-color)]" : ""} cursor-pointer rounded-[0.3rem] border border-solid border-[var(--border)] bg-[var(--card-bg)] px-[0.8rem] hover:bg-[var(--hi-color)]`}
            >
              HTML/CSS
            </div>
            <div
              onClick={() => handleFilter("js")}
              className={`${ative === "js" ? "bg-[var(--hi-color)]" : ""} cursor-pointer rounded-[0.3rem] border border-solid border-[var(--border)] bg-[var(--card-bg)] px-[0.8rem] hover:bg-[var(--hi-color)]`}
            >
              JavaScript
            </div>
            <div
              onClick={() => handleFilter("react")}
              className={`${ative === "react" ? "bg-[var(--hi-color)]" : ""} cursor-pointer rounded-[0.3rem] border border-solid border-[var(--border)] bg-[var(--card-bg)] px-[0.8rem] hover:bg-[var(--hi-color)]`}
            >
              React/Next
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8">
            {data.map((ele) => {
              return (
                <div
                  key={ele.name}
                  className="max-[635]:max-w-full hover:bg-[var(--card-bg-h)] group flex min-h-100 max-w-1/2 min-w-70 flex-1 flex-col justify-between self-start rounded-lg border border-solid border-[var(--border)] bg-[var(--card-bg)] px-6 py-4 shadow-[var(--shadow)]"
                  data-aos="flip-left"
                >
                  <div className="relative w-full overflow-hidden rounded-lg h-50">
                    <Image
                      src={ele.bg}
                      fill
                      className="object-cover object-center w-full h-full scale-100 rotate-0 group-hover:rotate-4 group-hover:scale-120"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt="image of project"
                    />
                  </div>
                  <div className="flex flex-col self-start justify-between w-full gap-2">
                    <h3>{ele.name}</h3>
                    <p
                      dir={lang === "en" ? "ltr" : "rtl"}
                      className="text-[length:var(--fs-lead)]"
                    >
                      {lang === "en" ? ele.dis.en : ele.dis.ar}
                    </p>
                    <div className="flex items-center gap-4 text-[0.9rem]">
                      <Link
                        target="_blank"
                        href={ele.live}
                        className="bg-[var(--hi-color)] border border-solid border-[var(--border)] py-[0.1rem] px-[0.9rem] rounded-sm !text-[var(--white)] font-semibold h-11 flex items-center"
                      >
                        LIVE DEMO
                      </Link>
                      <Link
                        target="_blank"
                        href={ele.repo}
                        className="bg-[var(--primary)] border border-solid border-[var(--border)] py-[0.1rem] px-[0.9rem] rounded-sm !text-[var(--white)] font-semibold h-11 flex items-center"
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
