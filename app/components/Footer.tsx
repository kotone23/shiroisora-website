import {
	FaXTwitter,
	FaYoutube,
	FaInstagram,
	FaSpotify,
	FaApple,
} from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="bg-gray-950 text-white py-3 mt-4 border-t-4 border-gray-300">
			<div className="container mx-auto max-w-screen-lg flex justify-center space-x-6">
				<a href="https://twitter.com/" target="_blank" rel="noreferrer">
					<FaXTwitter />
				</a>
				<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
					<FaYoutube />
				</a>
				<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
					<FaInstagram />
				</a>
				<a
					href="https://open.spotify.com/intl-ja/artist/64tJ2EAv1R6UaZqc4iOCyj"
					target="_blank"
					rel="noreferrer"
				>
					<FaSpotify />
				</a>
				<a
					href="https://music.apple.com/jp/artist/ado/1492604670"
					target="_blank"
					rel="noreferrer"
				>
					<FaApple />
				</a>
			</div>
			<div>
				<p className="text-center mt-3">©︎ 2024 Band, All Rights Reserved.</p>
			</div>
		</footer>
	);
}
