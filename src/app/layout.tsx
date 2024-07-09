import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Birthday!",
  description:
    "Happy 25th, Lin Yanjun! May your year be filled with joy and success.",
  openGraph: {
    images: ["/HappyBirthdayCover.png"],
    title: "Happy Birthday Lin Yanjun!",
    description:
      "Happy 25th, Lin Yanjun! May your year be filled with joy and success.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
