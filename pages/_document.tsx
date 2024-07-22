// pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { font } from "@/app/font";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" type="image/ico" sizes="32x32" />
					<link rel="icon" href="/favicon.ico" type="image/ico" sizes="16x16" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
					<meta property="og:title" content="J.R. Lombardo, LCSW" />
					<meta property="og:description" content="Psychotherapy, Psychoanalysis and Clinical Supervision" />
					<meta property="og:image" content="/profile-photo.jpg" />
					<meta property="og:url" content="https://marilynrifkin.com" />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>
				<body className={font.roboto.variable}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
