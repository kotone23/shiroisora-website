import Image from "next/image";
import { Instagram } from "./components/InstaEmbed";
import MV from "./components/MV";
import BandMembers from "./components/Profile";
import Xtimeline from "./components/Xtimeline";

export default function Home() {
	return (
		<>
			<div className="container mx-auto max-w-screen-lg md:mt-8">
				<div className="flex justify-center">
					<Image
						src="/images/profile.jpg"
						alt="profile"
						width={960}
						height={640}
						priority
					/>
				</div>
			</div>
			<BandMembers />
			<div className="container mx-auto mt-8 max-w-3xl h-auto">
				<div className="mb-4">
					<h1 className="text-center text-2xl">MV</h1>
				</div>
				<MV videoId="skV-C8aJOFs"/>
			</div>
			<div className="w-full mt-8 mb-2">
				<h1 className="text-center text-2xl">Subscription</h1>
			</div>
			<div className="flex justify-center">
				<iframe
					title="spotify"
					style={{ borderRadius: "12px" }}
					src="https://open.spotify.com/embed/album/71vsfGhKC0dgzpMElY0v3R?utm_source=generator&theme=0"
					height="400"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				/>
			</div>
			<div className="w-full mt-8 mb-2">
				<h1 className="text-center text-2xl">SNS</h1>
			</div>
			<div className="container mx-auto max-w-screen-lg mt-8 flex flex-col md:flex-row">
				<div className="md:w-1/2 flex justify-center md:ml-8 mb-4">
					<Instagram url="https://www.instagram.com/p/C3w_xmRJtpF" />
				</div>
				<div className="w-full flex justify-center md:w-1/2 md:ml-6">
					<Xtimeline />
				</div>
			</div>
		</>
	);
}
