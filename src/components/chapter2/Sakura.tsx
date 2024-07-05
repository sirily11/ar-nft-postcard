"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
export function Sakura() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent", // Black background
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fcb6d0", // Pink color for the particles
          },
          links: {
            enable: false, // Disable lines between particles
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 200,
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.8,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 10,
              max: 30,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
