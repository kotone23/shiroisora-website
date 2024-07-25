import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import SpNav from "@/app/components/SpNav";
import { Link } from "next-view-transitions";
import { Noto_Sans_JP } from "next/font/google";
import { draftMode } from "next/headers";
import Image from "next/image";
import "../globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
// const mPlus1c = M_PLUS_1({ subsets: ['latin'] });
// const murecho = Murecho({ subsets: ["latin"] });

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();
	return (
		<html lang="ja">
			<body className={`${notoSansJP.className} bg-[#fcfcfc]`}>
				<header className="container mx-auto max-w-screen-lg mt-6 mb-6">
					<div className="flex justify-center">
						<Link href="/">
							<Image
								src="/images/logo_slate.png"
								alt="logo"
								width={128}
								height={128}
								priority
								className="shared-image"
							/>
						</Link>
					</div>
				</header>
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
