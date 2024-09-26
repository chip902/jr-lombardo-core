// pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { jrTheme } from "../app/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={jrTheme}>
			<Head>
				<title>J.R. Lombardo, LCSW</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" type="image/ico" sizes="32x32" />
				<link rel="icon" href="/favicon.ico" type="image/ico" sizes="16x16" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:title" content="J.R. Lombardo, LCSW" />
				<meta property="og:description" content="Psychotherapy" />
				<meta property="og:image" content="/jr-headshot.webp" />
				<meta property="og:url" content="https://jrlombardo.com" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
