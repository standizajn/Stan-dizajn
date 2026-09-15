import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
});

export const display = localFont({
  src: "../fonts/swiss-721-extended-roman.ttf",
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const body = localFont({
  src: "../fonts/swiss-721-extended-light.ttf",
  weight: "300",
  variable: "--font-body",
  display: "swap",
});
