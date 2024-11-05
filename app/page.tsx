import NavBar from "@/app/components/NavBar";
import SpNav from "@/app/components/SpNav";
import Image from "next/image";
import MV from "./components/MV";
import TopLogo from "./components/TopLogo";
import ScrollDownArrows from "./components/ScrollDownArrows";
import { YOUTUBE_MV_ID } from "@/lib/band-metadata";

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
			<div className="container mx-auto min-h-[60vh] md:min-h-[70vh] max-w-xl lg:max-w-3xl h-auto mb-10">
				<MV videoId={YOUTUBE_MV_ID} />
				<div className="mt-32 z-50 flex flex-col justify-center text-center">
					<h2 className="text-xl font-bold mb-1">News</h2>
					<br />
					<ul>
						<li className="mb-1">
							<a href="/feature/ratio" className="underline">
								1st EP "Ratio" 2024.11.20発売
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
