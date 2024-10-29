"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";

export default function EPReleasePage() {
	const [openVideo, setOpenVideo] = useState<{
		id: number;
		url: string;
	} | null>(null);
	const shortsRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState({
		shorts: false,
		cover: false,
		details: false,
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
					}
				}
			},
			{ threshold: 0.1 },
		);

		const elements = ["shorts", "cover", "details"];
		for (const el of elements) {
			const element = document.getElementById(el);
			if (element) observer.observe(element);
		}

		return () => observer.disconnect();
	}, []);

	const shorts = [
		{
			id: 1,
			url: "https://www.youtube.com/embed/Ivfrp24t1sU",
			thumbnail: "/features/enigma_.jpg",
		},
		{
			id: 2,
			url: "https://www.youtube.com/embed/iwgKgKio_ZE",
			thumbnail: "/features/invisibles.jpg",
		},
		{
			id: 3,
			url: "https://www.youtube.com/embed/nVkrh56aoy8",
			thumbnail: "/shorts/3.jpg",
		},
		{
			id: 4,
			url: "https://www.youtube.com/embed/shortId4",
			thumbnail: "/shorts/4.jpg",
		},
	];

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<video
				autoPlay
				loop
				muted
				className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0 opacity-50"
			>
				<source src="/features/liquid.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<div className="relative z-10">
				<header className="h-screen flex flex-col justify-center items-center text-center p-4">
					<h1 className="text-2xl md:text-4xl mb-4">1st EP</h1>
					<h2 className="text-4xl md:text-6xl mb-4">"Ratio"</h2>
					<p className="text-xl">November 20, 2024</p>
				</header>

				<section
					id="shorts"
					className={`p-4 transition-opacity duration-1000 ${
						isVisible.shorts ? "opacity-100" : "opacity-0"
					}`}
				>
					<h3 className="text-2xl font-bold mb-4 text-center">Tracks</h3>
					<div className="relative max-w-6xl mx-auto">
						<div
							ref={shortsRef}
							className="flex flex-nowrap overflow-x-auto space-x-4 p-4 scrollbar-hide"
						>
							{shorts.map((short) => (
								<Card
									key={short.id}
									className="flex-shrink-0 w-64 bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-200"
									onClick={() => setOpenVideo(short)}
								>
									<CardContent className="p-0 h-full relative">
										<Image
											src={short.thumbnail}
											alt={`Track ${short.id} thumbnail`}
											width={320}
											height={180}
											className="rounded"
										/>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<Dialog
					open={openVideo !== null}
					onOpenChange={() => setOpenVideo(null)}
				>
					<DialogContent className="h-5/6 bg-transparent border-none text-white">
						{/* <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose> */}
						{openVideo && (
							<div className="w-full">
								<iframe
									width="100%"
									height="100%"
									src={`${openVideo.url}?autoplay=1&mute=1`}
									title={`YouTube Short ${openVideo.id}`}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							</div>
						)}
					</DialogContent>
				</Dialog>

				<section
					id="cover"
					className={`h-screen flex justify-center items-center p-4 transition-opacity duration-1000 ${
						isVisible.cover ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="border">
						<Image
							src="/features/ratio_jacket.jpeg"
							alt="EP Cover"
							width={500}
							height={500}
							className="shadow-2xl"
						/>
					</div>
				</section>

				<section
					id="details"
					className={`min-h-screen flex flex-col justify-center items-center p-4 transition-opacity duration-1000 ${
						isVisible.details ? "opacity-100" : "opacity-0"
					}`}
				>
					{/* <Card className="w-full max-w-2xl bg-gray-800 text-white">
            <CardContent className="p-6"> */}
					<h3 className="text-2xl font-bold mb-4">1st EP "Ratio"</h3>
					<p className="text-sm">2024年11月20日</p>
					<p className="text-sm">1,500円</p>
					<p className="text-sm mb-8">SRISR-006</p>
					<ol className="text-xl text-center space-y-1 mb-16">
						<li>enigma</li>
						<li>Invisibles</li>
						<li>Waive</li>
						<li>after all</li>
					</ol>
					<p className="w-4/6">
						現代のアート・ロック――シロイソラ7年目のEPリリース!
						<br />
						東京・下北沢を拠点に活動する4ピースバンド、シロイソラ。
						<br />
						結成から7年。時代は目まぐるしく進化し、シロイソラは深化していく。
						<br />
						6作目となる本作『Ratio』は、アナログシンセサイザーやサンプリングパッドを取り入れ、人間の身体性と無機質なデジタル要素が共存する一枚となった。
						一度耳にすると思わず口ずさんでしまうリフが特徴的な「enigma」をはじめ、不可思議で味わい深い4曲で構成されている。
						<br />
						この世界は無数の色から成る。それらは重なったり、はじいたり、混ざりあったり。
						<br />
						自らの手でその配色を操らない限り、美しく見えることはない。
					</p>
				</section>
			</div>
		</div>
	);
}
