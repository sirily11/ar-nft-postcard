// @flow
import * as React from "react";
import Image from "next/image";

type Props = {
  children: React.ReactElement[];
  currentProgress: number;
};

export function shouldImageVisible(
  totalImages: number,
  index: number,
  progress: number,
) {
  const imageVisibleRange = [index / totalImages, (index + 1) / totalImages];

  return progress >= imageVisibleRange[0] && progress <= imageVisibleRange[1];
}

export function Slider(props: Props) {
  return (
    <div className={"w-full"}>
      {props.children.map((child, index) => (
        <div
          key={`image-${index}`}
          className={"absolute inset-0 flex justify-center w-full"}
          style={{
            opacity: shouldImageVisible(
              props.children.length,
              index,
              props.currentProgress,
            )
              ? 1
              : 0,
            transition: "opacity 0.5s",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
