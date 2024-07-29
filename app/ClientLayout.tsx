"use client";
//import "./globals.css";
import { font } from "./font";
import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import PrivacyBanner from "./PrivacyBanner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={font.raleway.variable}>
			<head></head>
			<body>
				<Providers>
					<Box as="main">{children}</Box>
					<PrivacyBanner />
				</Providers>
			</body>
		</html>
	);
}
