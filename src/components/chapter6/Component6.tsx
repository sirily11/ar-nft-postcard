"use client";
import * as React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import Image from "next/image";
import { Slider } from "@/components/chapter6/Slider";
import { Ma_Shan_Zheng } from "next/font/google";

type Props = {
  title: string;
  title2: string;
};

const font = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
});

export function Component6(props: Props) {
  const [progress, setProgress] = React.useState(0);
  const ref = useParallax({
    onProgressChange: (progress) => {
      setProgress(progress);
    },
  });

  return (
    <div className={"h-[400vh] bg-white relative"}>
      {/*scroll component*/}
      <Image
        src={"/assets/cloud-bg-4.svg"}
        alt={"cloud"}
        width={4000}
        height={4000}
        className={"absolute inset-0 bottom-0 h-[400vh] w-full object-cover"}
      />
      <div className={"absolute h-full w-full"} ref={ref.ref as any} />
      <Parallax
        translateY={[0, 100]}
        className={"w-full absolute top-96 h-screen"}
      >
        <h1
          className={"text-5xl text-center text-white"}
          style={{ ...font.style }}
        >
          {props.title}
        </h1>
      </Parallax>
      <div className={"w-full absolute bottom-40"}>
        <h1
          className={"text-5xl text-center text-black"}
          style={{ ...font.style }}
        >
          {props.title2}
        </h1>
      </div>

      <div className={"w-full sticky top-[30vh]"}>
        <Slider currentProgress={progress}>
          <Image
            src={"/assets/paris.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/germany.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/spain.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/switzerland.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/italy.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/italy-2.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/greece1.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/greece2.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/greece3.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/uk.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <Image
            src={"/assets/uk2.png"}
            width={2000}
            height={2000}
            alt={`paris`}
            className={"inset-0 aspect-auto h-96 object-contain"}
          />
          <div className={"h-[300px]"} />
        </Slider>
      </div>
    </div>
  );
}
