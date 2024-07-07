"use client";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { ZCOOL_KuaiLe } from "next/font/google";
import { Sakura } from "@/components/chapter2/Sakura";
import { Fireworks } from "@/components/chapter2/Fireworks";
import { SkyFullOfStars } from "@/components/chapter2/Stars";
import * as React from "react";

const font = ZCOOL_KuaiLe({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  titleText: string;
  tokyoFireworksTitle: string;
}

export default function Component2({ titleText, tokyoFireworksTitle }: Props) {
  const backgroundColor: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: false,
    opacity: [0.5, 1, "easeOutCubic"],
    endScroll: 2000,
    children: <div className={"absolute bg-pink-100 h-full w-full"} />,
  };

  const sakuraParticles: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: false,
    opacity: [0, 1, "easeOutCubic"],
    startScroll: 1000,
    endScroll: 1500,
    children: <Sakura />,
  };

  const sakura: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    translateX: [0, -50],
    opacity: [0, 1, "easeOutCubic"],
    startScroll: 1000,
    endScroll: 1500,
    children: (
      <Image
        src={"/assets/sakura.png"}
        alt={"sakura"}
        width={1000}
        height={500}
        style={{
          height: "auto",
        }}
        className={"absolute top-48 -left-20 max-w-5xl"}
      />
    ),
  };

  const title: BannerLayer = {
    scale: [1, 1.05, "easeOutCubic"],
    opacity: [0.5, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    speed: 0.5,
    children: (
      <div className="absolute inset-0 flex top-[500px] p-2 justify-center">
        <h1
          className="text-4xl md:text-8xl text-white text-center whitespace-pre"
          style={{ ...font.style }}
        >
          {titleText}
        </h1>
      </div>
    ),
  };

  const jrLine: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    translateX: [0, -50],
    opacity: [0.8, 1, "easeOutCubic"],
    startScroll: 1400,
    endScroll: 2200,
    children: (
      <Image
        src={"/assets/jr-line.png"}
        alt={"jr-line"}
        width={1000}
        height={500}
        style={{
          height: "auto",
        }}
        className={"absolute top-[1000px] -left-20 max-w-5xl"}
      />
    ),
  };

  const mountainFuji: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    opacity: [0.8, 1, "easeInOut"],
    translateX: [0, 50],
    startScroll: 1400,
    endScroll: 2300,
    style: { opacity: 0 },
    children: (
      <Image
        src={"/assets/fuji-mountain.png"}
        alt={"mountain-fuji"}
        width={2000}
        height={2000}
        className={"absolute -left-96 max-w-6xl top-[880px]"}
      />
    ),
  };

  const darkSky: BannerLayer = {
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    startScroll: 1800,
    endScroll: 2100,
    expanded: false,
    children: <div className="absolute inset-0 bg-slate-900" />,
  };

  const fireworkTitle: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: false,
    opacity: [0, 1, "easeOutCubic"],
    startScroll: 2000,
    endScroll: 2300,
    speed: -20,
    children: (
      <div
        className={
          "h-screen absolute top-[1000px] flex justify-center items-center w-full p-10"
        }
      >
        <span
          className={
            "text-white text-4xl break-all whitespace-pre text-center p-10"
          }
          style={{ ...font.style }}
        >
          {tokyoFireworksTitle}
        </span>
      </div>
    ),
  };

  const fireworksParticle: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: false,
    opacity: [0, 1, "easeOutCubic"],
    startScroll: 2000,
    endScroll: 3000,
    speed: 20,
    children: (
      <div className={"h-screen absolute top-[1000px]"}>
        <Fireworks />
      </div>
    ),
  };

  const skyFullOfStars: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: false,
    opacity: [0, 1, "easeOutCubic"],
    translateY: [-20, 0],
    expanded: false,
    startScroll: 2000,
    endScroll: 3000,
    speed: -10,
    children: (
      <div className={"absolute top-[1400px] h-screen w-screen left-0"}>
        <SkyFullOfStars />
      </div>
    ),
  };

  const citySkylines: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    translateY: [10, 20],
    shouldAlwaysCompleteAnimation: false,
    opacity: [0, 1, "easeOutCubic"],
    startScroll: 2000,
    endScroll: 2800,
    speed: 0.5,
    children: (
      <Image
        src={"/assets/city-skylines.png"}
        alt={"sky-lines"}
        width={2000}
        height={2000}
        className={
          "absolute -left-96 md:left-0 bottom-0 max-w-6xl top-[1400px] md:w-screen object-fill"
        }
      />
    ),
  };

  const blueSky: BannerLayer = {
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    startScroll: 3000,
    endScroll: 3300,
    children: <div className="absolute inset-0 bg-sky-100" />,
  };

  return (
    <ParallaxBanner
      layers={[
        backgroundColor,
        sakuraParticles,
        title,
        sakura,
        mountainFuji,
        jrLine,
        darkSky,
        fireworkTitle,
        skyFullOfStars,
        fireworksParticle,
        citySkylines,
        blueSky,
      ]}
      className="h-[250vh]"
    />
  );
}
