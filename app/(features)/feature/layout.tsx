import Footer from "@/app/components/Footer";
import WhiteNav from "@/app/components/WhiteNav";


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