"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function SkyFullOfStars() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles
      id="stars"
      options={{
        background: {
          color: {
            value: "transparent",
          },
          position: "relative",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 500,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.5,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        detectRetina: true,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
