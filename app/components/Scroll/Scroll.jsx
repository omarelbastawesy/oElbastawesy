"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighterUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 3500; // 👈 سرعة الحركة
    const start = window.scrollY;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing ناعم
      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group fixed right-7.5 bottom-7.5 z-200 h-11.25 w-11.25 cursor-pointer rounded-full border-0 bg-[var(--hi-color)] text-white shadow-[var(--shadow)] transition-all duration-300 ease-in-out ${visible ? "translate-y-0 scale-100 opacity-100" : "-translate-y-2.5 scale-90 opacity-0"}`}
    >
      <FontAwesomeIcon
        className="relative animate-[move_0.8s_ease-in-out_infinite] [&_path]:transition-[filter] [&_path]:duration-300 group-hover:[&_path]:[filter:drop-shadow(0_0_5px_#00f7ff)_drop-shadow(0_0_10px_#00f7ff)_drop-shadow(0_0_20px_#00f7ff)_drop-shadow(0_0_40px_#00c6ff)]"
        icon={faJetFighterUp}
      />
    </button>
  );
}
