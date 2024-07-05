import { Fireworks as FireworksComponent } from "@fireworks-js/react";

export function Fireworks() {
  return (
    <FireworksComponent
      options={{
        opacity: 0.5,
        traceLength: 4,
        explosion: 10,
        autoresize: false,
      }}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
