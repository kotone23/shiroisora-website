import {
	FaXTwitter,
	FaYoutube,
	FaInstagram,
	FaSpotify,
	FaApple,
} from "react-icons/fa6";
import {
	TWITTER_NAME,
	YOUTUBE_CHANNEL_URL,
	INSTAGRAM_NAME,
	SPOTIFY_URL,
	APPLE_MUSIC_URL,
} from "@/lib/band-metadata";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/app/components/ui/dialog";

export default function Footer() {
	const thisYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-950 text-white pt-3 pb-1.5 mt-auto border-t-4 border-gray-300">
			<div className="container mx-auto max-w-screen-lg flex justify-center space-x-6">
				<a
					href={`https://x.com/${TWITTER_NAME}`}
					target="_blank"
					rel="noreferrer"
				>
					<FaXTwitter />
				</a>
				<a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
					<FaYoutube />
				</a>
				<a
					href={`https://www.instagram.com/${INSTAGRAM_NAME}`}
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram />
				</a>
				<a href={SPOTIFY_URL} target="_blank" rel="noreferrer">
					<FaSpotify />
				</a>
				<a href={APPLE_MUSIC_URL} target="_blank" rel="noreferrer">
					<FaApple />
				</a>
			</div>
			<div>
				<p className="text-center text-sm mt-1.5">
					©︎ 2017-{thisYear} Shiroisora, All Rights Reserved.
				</p>
			</div>
			<div className="text-center mt-[-4px]">
				<Dialog>
					<DialogTrigger>
						<p className="text-xs underline decoration-dotted hover:decoration-solid">
							privacy policy
						</p>
					</DialogTrigger>
					<DialogContent className="rounded-none w-11/12 max-w-xl">
						<DialogHeader>
							<DialogTitle>プライバシーポリシー</DialogTitle>
							<DialogDescription>
								このサイトは Google Analytics を利用しており、
								<br className="hidden md:inline" />
								データの収集のために Cookie が使用されます。
								<br className="hidden md:inline" />
								詳しくは Google の「
								<a
									href="https://policies.google.com/technologies/partner-sites?hl=ja"
									target="_blank"
									rel="noreferrer"
									className="underline"
								>
									ポリシーと規約
								</a>
								」をご覧ください。
								<p className="mt-6">
									また、サイトへのお問い合わせで取得した個人情報は、
									<br className="hidden md:inline" />
									必要な情報を連絡する用途にのみ利用します。
								</p>
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</div>
		</footer>
	);
}
