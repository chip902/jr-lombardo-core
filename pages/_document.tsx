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
				<Head></Head>
				<body className={font.raleway.variable}>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
