import Favicon from "@/public/images/favicon.ico";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
	title: {
		template: "%s | シロイソラ",
		default: "シロイソラ official website",
	},
	description:
		"シロイソラのオフィシャルサイト。ライブスケジュールや過去のセットリスト、CDの情報など。",
	icons: [{ rel: "icon", url: Favicon.src }],
	openGraph: {
		title: {
			template: "%s | シロイソラ",
			default: "シロイソラ official website",
		},
		type: "website",
		locale: "ja_JP",
		images: "/images/profile.jpg",
	},
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
