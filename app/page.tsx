import NavBar from "@/app/components/NavBar";
import SpNav from "@/app/components/SpNav";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "WHITE SKY",
	description: "WHITE SKY",
};

export default function Home() {
	return (
		<>
			<div className="fixed h-screen w-screen top-0 -z-50">
				<Image
					alt="Mountains"
					src="/images/sky.jpg"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<SpNav />
			<NavBar />
			<div className="flex justify-center items-center min-h-screen">
				<div className="animate-slide-in-bck-center">
					<Image
						src="/images/whitesky.png"
						alt="profile"
						width={480}
						height={320}
						priority
					/>
				</div>
			</div>
		</>
	);
}
