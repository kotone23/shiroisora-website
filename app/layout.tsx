import Favicon from "@/public/images/favicon.ico";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
	title: "シロイソラ",
	description: "シロイソラ",
	icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ViewTransitions>
			<html lang="ja">
				<body>{children}</body>
			</html>
		</ViewTransitions>
	);
}
