import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "J.R. Lombardo, LCSW",
	description: "Psychotherapy, Relief is real. And it can start today.",
	icons: {
		shortcut: { url: "/favicon.ico", type: "image/ico" },
	},
};

const ServerLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GoogleTagManager gtmId="GTM-W8ZBQMSC" />
			{children}
		</>
	);
};

export default ServerLayout;
