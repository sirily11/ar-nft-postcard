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

export function Component4(props: Props) {
  const sky: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="absolute inset-0 gradient-sky" />,
  };

  const tokyoCity: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 1,
    translateY: [0, 5],
    scale: [1, 2],
    children: (
      <div className={"flex justify-center inset-0 items-center"}>
        <Image
          src={"/assets/tokyo-city.png"}
          alt={"tokyo-city"}
          width={1000}
          height={1000}
          className={
            "mt-40 right-0 w-[140vw] h-[200vh] aspect-square object-contain"
          }
        />
      </div>
    ),
  };

  const tokyoTower: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 1,
    translateY: [-10, -5],
    translateX: [-20, 5],
    scale: [1, 3],
    expanded: true,
    children: (
      <div className={"flex justify-center items-center h-full"}>
        <Image
          src={"/assets/tokyo-tower.svg"}
          alt={"tokyo-tower"}
          width={1000}
          height={1000}
          className={
            "right-0 w-full h-[20vh] mt-32 aspect-square object-contain"
          }
        />
      </div>
    ),
  };

  const title: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    translateY: [0, 50],
    scale: [1, 1.1],
    opacity: [0, 1, "easeOutCubic"],
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

  const cloud1: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 1,
    translateY: [0, 30],
    scale: [1, 1.1],
    rotate: [0, 10],
    children: (
      <Image
        src={"/assets/cloud-1.png"}
        alt={"cloud1"}
        width={1000}
        height={1000}
        className={
          "absolute top-[27%] right-5 w-[200px] aspect-square object-contain"
        }
      />
    ),
  };

  const cloud2: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 1,
    translateY: [0, 28],
    scale: [1, 1.1],
    rotate: [0, -10],
    children: (
      <Image
        src={"/assets/cloud-2.png"}
        alt={"cloud1"}
        width={1000}
        height={1000}
        className={
          "absolute top-[35%] left-5 w-[200px] aspect-square object-contain"
        }
      />
    ),
  };

  const cloud3: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 1,
    translateY: [0, 40],
    scale: [1, 1.1],
    children: (
      <Image
        src={"/assets/cloud-3.png"}
        alt={"cloud1"}
        width={1000}
        height={1000}
        className={
          "absolute top-[20%] left-28 w-[200px] aspect-square object-contain"
        }
      />
    ),
  };

  return (
    <ParallaxBanner
      layers={[sky, title, tokyoTower, cloud1, cloud2, cloud3, tokyoCity]}
      className="h-[200vh]"
    />
  );
}
