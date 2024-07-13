import NavBar from "@/app/components/NavBar";
import SpNav from "@/app/components/SpNav";
import Image from "next/image";
import MV from "./components/MV";
import TopLogo from "./components/TopLogo";
import ScrollDownArrows from "./components/ScrollDownArrows";

export default function Home() {
	return (
		<>
			<div className="fixed h-screen w-screen top-0 -z-50">
				<Image
					alt="white sky"
					src="/images/background.jpg"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
					className="animate-slide-in-bck-center"
				/>
			</div>
			<SpNav />
			<NavBar />
			<TopLogo />
			<ScrollDownArrows />
			<div className="container mx-auto min-h-[60vh] max-w-3xl h-auto mb-8">
				<MV videoId="skV-C8aJOFs" />
			</div>
		</>
	);
}
