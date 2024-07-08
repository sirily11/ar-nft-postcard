"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { Web3Modal } from "@/app/context/Web3Modal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Web3Modal>
      <ParallaxProvider>{children}</ParallaxProvider>
    </Web3Modal>
  );
}
