"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          background: {
            color: "var(--primary)",
          },
          particles: {
            number: {
              value: 70,
              density: { enable: true, area: 800 },
            },
            color: { value: "#0077ff" },
            links: {
              enable: true,
              color: "#0077ff",
              distance: 150,
              opacity: 0.4,
            },
            move: {
              enable: true,
              speed: 2,
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
          },
        },
      });
    });
  }, []);

  return <div id="tsparticles" />;
}
