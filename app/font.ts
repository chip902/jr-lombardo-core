// font.ts
"use client";
import { Roboto } from "next/font/google";
import { Raleway } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	variable: "--font-roboto",
	weight: ["100", "300", "400", "500", "700", "900"],
});

const raleway = Raleway({
	subsets: ["latin"],
	variable: "--font-raleway",
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const font = {
	roboto,
	raleway,
};
