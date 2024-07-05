"use client";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { Long_Cang } from "next/font/google";

const longCang = Long_Cang({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  title: string;
}

export default function Component({ title }: Props) {
  const background: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    image: "/assets/starry-night.webp",
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    opacity: [0.9, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-6xl md:text-8xl text-white text-center p-2"
          style={{ ...longCang.style }}
        >
          {title}
        </h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    speed: -20,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Image
        src={"/assets/mountain.png"}
        alt={"mountain"}
        width={1000}
        height={1000}
        className={"absolute -bottom-10 max-w-5xl"}
      />
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="h-[140vh] bg-gray-900"
    />
  );
}
