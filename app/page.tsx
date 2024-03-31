import Image from "next/image";
import Xtimeline from "./components/Xtimeline";
import { Instagram } from "./components/InstaEmbed";
import MV from "./components/MV";

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
			<div className="container mx-auto mt-8 aspect-video max-w-2xl h-auto">
				<div className="mb-4">
					<h1 className="text-center text-2xl">MV</h1>
				</div>
				<MV />
			</div>
			<div className="w-full mt-8 mb-2">
				<h1 className="text-center text-2xl">SNS</h1>
			</div>
			<div className="container mx-auto max-w-screen-lg mt-8 flex flex-col md:flex-row">
				<div className="md:w-1/2 flex justify-center md:ml-8 mb-4">
					<Instagram url="https://www.instagram.com/p/CqzLG8Yv6DE" />
				</div>
				<div className="w-full flex justify-center md:w-1/2 md:ml-6">
					<Xtimeline />
				</div>
			</div>
		</>
	);
}
