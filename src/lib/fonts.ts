import { Poppins, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

export const display = localFont({
  src: "../fonts/helvetica-regular.ttf",
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const body = localFont({
  src: "../fonts/helvetica-light.ttf",
  weight: "300",
  variable: "--font-body",
  display: "swap",
});

export const lightItalic = localFont({
  src: "../fonts/swiss-721-light-italic.ttf",
  weight: "300",
  style: "italic",
  variable: "--font-light-italic",
  display: "swap",
});

export const heroSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-hero-serif",
});
