import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import SpNav from "@/app/components/SpNav";
import { Link } from "next-view-transitions";
import { draftMode } from "next/headers";
import Image from "next/image";
import "../globals.css";

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isEnabled } = draftMode();
	return (
		<>
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
		</>
	);
}
