// theme.ts
"use client";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";

const fontConfig = {
	fonts: {
		heading: "var(--font-raleway), sans-serif",
		body: "var(--font-raleway), sans-serif",
		main: "var(--font-raleway)",
		mono: "Menlo, monospace",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem",
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	lineHeights: {
		normal: "normal",
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: "2",
		"3": ".75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"7": "1.75rem",
		"8": "2rem",
		"9": "2.25rem",
		"10": "2.5rem",
	},
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em",
	},
};

const extension = {
	styles: {
		global: {
			body: {
				fontFamily: "var(--font-raleway)",
			},
		},
		variants: {
			nav: {
				backgroundColor: "#000000",
				color: "#006400",
			},
		},
	},
	colors: {
		gray: {
			50: "#f7fafc",
			100: "#eeeeee",
			200: "#e2e8f0",
			300: "#cbd5e0",
			400: "#a0aec0",
			500: "#718096", // Default text color
			600: "#4a5568",
			700: "#2d3748",
			800: "#1a202c",
			900: "#171923",
		},
		brand: {
			50: "#e3f2fd",
			100: "#006400",
			200: "#90caf9",
			300: "#64b5f6",
			400: "#42a5f5",
			500: "#2196f3", // Primary button color
			600: "#1e88e5",
			700: "#1976d2",
			800: "#1565c0",
			900: "#0d47a1",
		},
		secondary: {
			50: "#e8f5e9",
			100: "#c8e6c9",
			200: "#a5d6a7",
			300: "#81c784",
			400: "#66bb6a",
			500: "#4caf50", // Secondary button color
			600: "#006400",
			700: "#388e3c",
			800: "#2e7d32",
			900: "#1b5e20",
		},
	},
	radii: {
		md: "12px", // Border radius
	},
};

const buttonLink = {
	components: {
		MotionHeading: {
			baseStyle: {
				color: "#006400",
				fontFamily: "raleway",
				textShadow: "1px 1px 2px black, 0 0 1em white",
			},
		},
		Heading: {
			baseStyle: {
				color: "#006400",
				fontFamily: "raleway",
			},
		},
		Link: {
			baseStyle: {
				position: "relative",
				color: "#006400",
				textDecoration: "none",
				_hover: {
					textDecoration: "none",
				},
			},
			variants: {
				linkNav: {
					marginX: 5,
					padding: 1,
					fontSize: "lg",
					color: "#006400",
					position: "relative",
					textDecoration: "none",
					_hover: {
						textDecoration: "none",
						_after: {
							width: "100%",
							backgroundColor: "brand.100",
						},
					},
					_after: {
						content: '""',
						position: "absolute",
						width: "0",
						height: "3px",
						backgroundColor: "brand.100",
						bottom: "-4px",
						left: "0",
						transform: "translateX(0%)",
						transition: "width 0.3s ease-out",
					},
				},
			},
		},
		Button: {
			variants: {
				linkNav: {
					marginX: 5,
					padding: 1,
					color: "#006400",
					fontSize: "lg",
					position: "relative",
					textDecoration: "none",
					_hover: {
						textDecoration: "none",
						_after: {
							width: "100%",
							backgroundColor: "brand.100",
						},
					},
					_after: {
						content: '""',
						position: "absolute",
						width: "0",
						height: "3px",
						backgroundColor: "brand.100",
						bottom: "-4px",
						left: "0",
						transform: "translateX(0%)",
						transition: "width 0.3s ease-out",
					},
				},
				inline: {
					fontSize: "md",
					position: "relative",
					color: "#006400",
					textDecoration: "none",
					_hover: {
						textDecoration: "none",
						_after: {
							width: "100%",
							backgroundColor: "brand.100",
						},
					},
					_after: {
						content: '""',
						position: "absolute",
						width: "0",
						height: "3px",
						backgroundColor: "brand.100",
						bottom: "-3px",
						left: "0",
						transform: "translateX(0%)",
						transition: "width 0.3s ease-out",
					},
				},
			},
		},
	},
};

const extendedConfig = extendTheme({
	...buttonLink,
	...fontConfig,
	...extension,
	breakpoints: {
		sm: "30em",
		base: "48em",
		lg: "62em",
		xl: "80em",
		"2xl": "96em",
	},
});

export const jrTheme = extendTheme(extendedConfig, proTheme);
