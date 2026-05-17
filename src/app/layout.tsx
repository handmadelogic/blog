import type { Metadata } from "next";
import {
  Nunito,
  Caveat,
  Fraunces,
  Lora,
  Bricolage_Grotesque,
  Homemade_Apple,
  Inter,
} from "next/font/google";
import "./globals.css";
import AnimationObserver from "@/components/AnimationObserver";

const nunito = Nunito({ subsets: ["latin"], variable: "--nf-nunito" });
const caveat = Caveat({ subsets: ["latin"], variable: "--nf-caveat" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--nf-fraunces" });
const lora = Lora({ subsets: ["latin"], variable: "--nf-lora" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--nf-bricolage" });
const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400", variable: "--nf-homemade" });
const inter = Inter({ subsets: ["latin"], variable: "--nf-inter" });

export const metadata: Metadata = {
  title: "Handmade Logic",
  description: "A little craft journal on the internet. Kept slowly, with care.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    nunito.variable,
    caveat.variable,
    fraunces.variable,
    lora.variable,
    bricolage.variable,
    homemadeApple.variable,
    inter.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>
        {children}
        <AnimationObserver />
      </body>
    </html>
  );
}
