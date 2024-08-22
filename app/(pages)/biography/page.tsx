import Image from "next/image";
import BandMembers from "../../components/Profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Biography",
	description: "シロイソラのBiography",
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
						width={960}
						height={640}
						priority
					/>
				</div>
				<div className="mt-2 text-right text-xs text-muted-foreground">
					L→R / 縫部たまき、ねね、ひかり、田中琴音
				</div>
			</div>
			<div className="p-6">
				<h1 className="text-center text-xl">シロイソラ</h1>
				<div className="px-8 py-6 text-xs md:text-sm text-center">
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
