"use client";

import { useLang } from "./Data/LangContext";
import dynamic from "next/dynamic";
import Background from "./components/Global/Background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";

const Skills = dynamic(() => import("./components/Skills/Skills"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Head = dynamic(() => import("./components/Global/Head/Head"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const About = dynamic(() => import("./components/About/About"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Projects = dynamic(() => import("./components/Projects/Projects"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Contact = dynamic(() => import("./components/Contact/Contact"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Footer = dynamic(() => import("./components/Footer/Footer"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  const { t } = useLang();
  return (
    <>
      <Background />
      <div style={{ position: "relative", zIndex: "10" }}>
        <Navbar />
        <Hero />
        <Head id="about">{t.header.about}</Head>
        <About />
        <Head id="skills">{t.header.skill}</Head>
        <Skills />
        <Head id="projects">{t.header.project}</Head>
        <Projects />
        <Head id="contact">{t.header.contact}</Head>
        <Contact />
        <Footer />
      </div>
    </>
  );
}
