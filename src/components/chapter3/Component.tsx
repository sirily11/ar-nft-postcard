"use client";
import * as React from "react";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { ZCOOL_KuaiLe } from "next/font/google";

type Props = {
  title: string;
};

const font = ZCOOL_KuaiLe({
  weight: "400",
  subsets: ["latin"],
});

export function Component3(props: Props) {
  const pinkSky: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="absolute inset-0 bg-sky-100" />,
  };

  const sun: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, 2],
    scale: [1, 1.2],
    children: (
      <Image
        src={"/assets/sun.svg"}
        alt={"sun"}
        width={400}
        height={400}
        className={"absolute top-10 right-10 w-24 aspect-square object-fill"}
      />
    ),
  };

  const kiyomizu: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 1,
    translateY: [0, 50],
    scale: [1, 1.1],
    expanded: true,
    children: (
      <Image
        src={"/assets/kiyomizu-dera.png"}
        alt={"kiyomizu-dera"}
        width={1000}
        height={1000}
        className={
          "absolute bottom-0 right-0 w-[140vw] h-[200vh] aspect-square object-contain"
        }
      />
    ),
  };

  const tree1: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 0.8,
    translateY: [0, 25],
    scale: [1, 1.1],
    expanded: true,
    children: (
      <Image
        src={"/assets/tree-1.png"}
        alt={"tree1"}
        width={1000}
        height={1000}
        className={
          "absolute -bottom-0 -left-24 w-[100vw] h-[100vh] aspect-square object-contain"
        }
      />
    ),
  };

  const tree2: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, 20],
    scale: [1, 1.1],
    expanded: true,
    children: (
      <Image
        src={"/assets/tree-2.png"}
        alt={"tree1"}
        width={1000}
        height={1000}
        className={
          "absolute -bottom-10 right-0 w-[100vw] h-[100vh] aspect-square object-contain"
        }
      />
    ),
  };

  const title: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, -8],
    scale: [1, 1.1],
    expanded: true,
    children: (
      <div
        className={
          "flex inset-0 justify-center items-center bottom-0 h-full p-10"
        }
      >
        <h1
          className="text-6xl font-bold text-center"
          style={{ ...font.style }}
        >
          {props.title}
        </h1>
      </div>
    ),
  };

  return (
    <ParallaxBanner
      layers={[pinkSky, sun, tree1, tree2, title, kiyomizu]}
      className="h-[150vh]"
    />
  );
}
