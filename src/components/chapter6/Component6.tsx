"use client";
import * as React from "react";
import { useParallax } from "react-scroll-parallax";
import Image from "next/image";

type Props = {};
const totalImages = 2;

export function shouldImageVisible(index: number, progress: number) {
  const imageVisibleRange = [index / totalImages, (index + 1) / totalImages];

  return progress >= imageVisibleRange[0] && progress <= imageVisibleRange[1];
}

export function Component6(props: Props) {
  const [progress, setProgress] = React.useState(0);
  const ref = useParallax({
    onProgressChange: (progress) => {
      setProgress(progress);
    },
  });

  return (
    <div className={"h-[200vh]"}>
      <div ref={ref.ref as any}>
        <Image
          src={"/assets/starry-night.webp"}
          alt={"starry-night"}
          width={2000}
          height={2000}
          style={{
            opacity: 0,
            transition: "opacity 0.5s",
          }}
        />

        <Image
          src={"/assets/starry-night.webp"}
          alt={"starry-night"}
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
}
