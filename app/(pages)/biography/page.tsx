import Image from "next/image";
import BandMembers from "../../components/Profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Biography",
	description: "白イ空のBiography",
	openGraph: {
		title: "Biography",
	},
};

export default function Home() {
	return (
		<main>
			<div className="container mx-auto max-w-screen-lg md:mt-8">
				<div className="flex justify-center">
					<Image
						src="/images/profile.jpg"
						alt="profile"
						width={1000}
						height={750}
						quality={100}
						priority
					/>
				</div>
			</div>
			<div className="p-6">
				<h1 className="py-2 text-center text-xl">白イ空</h1>
				<div className="p-3 text-xs md:text-sm text-left md:text-center">
					2016年、幼馴染のひかりと縫部で立ち上げ。
					<br className="hidden md:inline" />
					それぞれの学生時代からの友人である田中とねねを誘い、2017年より活動開始。
					<br />
					「4人で完結する音楽」を唯一のルールとし、なにものにもとらわれない独自の表現を模索中。
				</div>
				<BandMembers />
			</div>
		</main>
	);
}
