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

export default function Footer() {
	return (
		<footer className="bg-gray-950 text-white py-3 mt-4 border-t-4 border-gray-300">
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
				<p className="text-center mt-3">©︎ 2024 Shiroisora, All Rights Reserved.</p>
			</div>
		</footer>
	);
}
