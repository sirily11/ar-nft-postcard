"use client";
import * as React from "react";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { Ma_Shan_Zheng } from "next/font/google";

type Props = {
  title: string;
  title2: string;
  title3: string;
};

const font = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
});

export function Component5(props: Props) {
  const kuromi: BannerLayer = {
    expanded: false,
    translateY: [-20, 100],
    scale: [0.8, 1.5],
    children: (
      <div className="flex justify-center absolute bottom-[200vh] w-full">
        <Image
          src="/assets/Kuromi_3.svg"
          alt="kuromi"
          className="h-96 w-64"
          width={1000}
          height={1000}
        />
      </div>
    ),
  };

  const background: BannerLayer = {
    image: "/assets/cartoon-background.webp",
    speed: -10,
    expanded: true,
  };

  const title: BannerLayer = {
    translateY: [0, -30],
    scale: [1, 0.5],
    children: (
      <div className="flex justify-center absolute bottom-[150vh]">
        <p
          className="text-4xl text-white text-center whitespace-pre break-all w-screen"
          style={{ ...font.style }}
        >
          {props.title}
        </p>
      </div>
    ),
  };

  const title2: BannerLayer = {
    translateY: [0, -30],
    scale: [1, 0.5],
    children: (
      <div className="flex justify-center absolute bottom-[100vh]">
        <p
          className="text-4xl text-white text-center whitespace-pre break-all w-screen"
          style={{ ...font.style }}
        >
          {props.title2}
        </p>
      </div>
    ),
  };

  const title3: BannerLayer = {
    translateY: [0, -30],
    scale: [1, 0.5],
    children: (
      <div className="flex justify-center absolute bottom-[50vh]">
        <p
          className="text-4xl text-white text-center whitespace-pre break-all w-screen"
          style={{ ...font.style }}
        >
          {props.title3}
        </p>
      </div>
    ),
  };

  const doraemon: BannerLayer = {
    expanded: false,
    children: (
      <div className="flex justify-center absolute bottom-[20vh] w-full">
        <Image
          src="/assets/doraemon.svg"
          alt="doraemon"
          className="w-full"
          width={1000}
          height={1000}
        />
      </div>
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, title, title2, title3, kuromi, doraemon]}
      className={"h-[250vh] bg-pink-100"}
    />
  );
}
