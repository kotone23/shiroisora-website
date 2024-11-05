import type { Metadata } from "next";
import Footer from "@/app/components/Footer";
import WhiteNav from "@/app/components/WhiteNav";

export const metadata: Metadata = {
	title: "1st EP \"Ratio\"",
	description: "1st EP \"Ratio\"の特設ページ",
	openGraph: {
		title: "1st EP \"Ratio\"",
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