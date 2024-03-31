import type { Metadata } from "next";
import { Noto_Sans_JP, Murecho } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import NavBar from "./components/NavBar";
import SpNav from "./components/SpNav";
import Footer from "./components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
// const mPlus1c = M_PLUS_1({ subsets: ['latin'] })
const murecho = Murecho({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WHITE SKY",
	description: "WHITE SKY",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();
	return (
		<html lang="ja">
			<body className={notoSansJP.className}>
				<div className="container mx-auto max-w-screen-lg mt-4">
					<div className="flex justify-center">
						<Image
							src="/images/logo.png"
							alt="logo"
							width={240}
							height={240}
							priority
						/>
					</div>
				</div>
				<SpNav />
				<NavBar />
				{isEnabled && (
					<p className="flex justify-center mt-4 text-orange-500">
						<Link
							href="/api/disable-draft"
							prefetch={false}
							className="hover:underline"
						>
							ドラフトモードをやめる
						</Link>
					</p>
				)}
				{children}
				<Footer />
			</body>
		</html>
	);
}
