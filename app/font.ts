// font.ts
"use client";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const font = {
	roboto,
};
