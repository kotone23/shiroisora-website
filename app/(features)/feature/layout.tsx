import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import WhiteNav from "@/app/components/WhiteNav";

export const metadata: Metadata = {
	title: "1st EP \"Ratio\"",
	description: "現代のアート・ロック――シロイソラ7年目のEP \"Ratio\" リリース",
	openGraph: {
		title: "1st EP \"Ratio\"",
		type: "website",
		locale: "ja_JP",
		images: "/features/ratio/ratio_cover.jpg",
	},
};

export default function PageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="relative z-20">
				<WhiteNav />
			</div>
			{children}
			<div className="relative z-20">
				<Footer />
			</div>
		</>
	);
}