"use client";
import * as React from "react";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { Ma_Shan_Zheng } from "next/font/google";

type Props = {
  title: string;
  claimButton: string;
};

const font = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
});

export function Component7(props: Props) {
  const claimButton: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    translateY: [0, 25],
    opacity: [0, 1, [0, 0, 0, 0]],
    children: (
      <div className={"flex justify-center items-center h-full"}>
        {/*button*/}
        <button
          className={
            "w-40 active:scale-125 text-yellow-950 active:text-yellow-800 relative"
          }
          onClick={() => {}}
        >
          <Image
            src={"/assets/button.svg"}
            alt={"button"}
            width={300}
            height={200}
            className={"absolute z-0 w-full object-contain"}
          />
          <div
            className={
              "z-10 absolute w-full h-full flex justify-center font-bold mt-1"
            }
          >
            <span>{props.claimButton}</span>
          </div>
        </button>
      </div>
    ),
  };

  const background: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    image: "/assets/night-sky.svg",
  };

  const headline: BannerLayer = {
    translateY: [0, 10],
    scale: [1, 1.05, "easeOutCubic"],
    opacity: [0.9, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <span
          className="text-5xl md:text-8xl text-white text-center p-2 whitespace-pre break-all"
          style={{ ...font.style }}
        >
          {props.title}
        </span>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    speed: 10,
    children: (
      <Image
        src={"/assets/new-york1.png"}
        alt={"new-york"}
        width={1000}
        height={1000}
        className={"absolute bottom-0 h-[600px] object-cover"}
      />
    ),
  };

  const kuromi: BannerLayer = {
    translateY: [0, 20],
    children: (
      <div
        className={"flex flex-row justify-center absolute bottom-80 left-10"}
      >
        <Image
          src={"/assets/kuromi.svg"}
          alt={"kuromi"}
          width={1000}
          height={1000}
          className={"w-48"}
        />
        <Image
          src={"/assets/doraemon.svg"}
          alt={"kuromi"}
          width={1000}
          height={1000}
          className={"w-64"}
        />
      </div>
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, kuromi, claimButton]}
      className="h-[150vh] bg-gray-900"
    />
  );
}
