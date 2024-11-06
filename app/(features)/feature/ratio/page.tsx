"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/app/components/ui/dialog";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import type React from "react";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa6";
import MyMarkdown from "@/app/components/MyMarkdown";

const ExternalLinkIcon: React.FC = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		className="ml-0.5 mt-0.5"
		fill="currentColor"
	>
		<title>外部サイトへ</title>
		<path d="M5 5h7v2H7v10h10v-5h2v7H5V5z" />
		<path d="M13 5h6v6h-2V8.414l-7 7L8.586 14l7-7H13V5z" />
	</svg>
);

export default function RatioReleasePage() {
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
			title: "enigma",
			url: "https://www.youtube.com/embed/Ivfrp24t1sU",
			mv: "https://www.youtube.com/watch?v=1_TfwCeEVMY",
			thumbnail: "/features/enigma.jpg", // https://i.ytimg.com/vi/{id}/oar2.jpg
			lyrics: `眠っては生まれ変わって
絶望、希望、を繰り返す
いずれ「若さ」に回収される
ノイズまみれの生活
目を閉じて、口を噤み、耳を塞ぎ、
人波に溶け込んでいく君を
いつの間にか見失って
やがて思い出すこともなくなる
心地よい疲労と充足感
安定した都市生活
目を開けて、口を利いて、耳を澄ませ、
ありふれたプロローグ

許されないさ
誰の話だ
煙草とライター
海が鳴る

暴かれる罪
裁かれぬ貴人
憚られる異議
曝される死人
浅はかな常套句を繰り返す
馴れ合いのネットワーク
遍く潜むヒステリア
甘く儚く既に手遅れ
そのため、残されたただ一つの
希望の道は修羅の道
位置につけ、敵を撃て
何がため?
愛、正義
それ、嘘。

赦されないさ
誰の話だ
煙草とライター
海が鳴る

霧がかった表情で鮮やかに散っていく
花束と暗号機

それはまるで祈りの様だった`,
		},
		{
			id: 2,
			title: "Invisibles",
			url: "https://www.youtube.com/embed/iwgKgKio_ZE",
			thumbnail: "/features/invisibles.jpg",
			lyrics: `その蜩の行く先に待つ私
「ありのまま」が描く無色の問い
子どもの頃に見た景色をなぞる

この身を揺らす鼓動は遥か昔
張りつめた琥珀の海を纏い
留まることなく遺伝子を辿る

どうか、急ぎ過ぎずに
世界の中心はここじゃない
ここである必要はない

最終回の連想ゲーム
何年経っても止められないの？
回収する失った全部
I want to know how I feel.

最終回の回送、現実
何年経っても飽き足りないよ
回収する失った全部
I want to know your ideal you.`,
		},
		{
			id: 3,
			title: "Waive",
			url: "",
			thumbnail: "/features/waive.jpg",
			lyrics: `醒めた途端に雨が降り
枯れた孤独に滴った

ねえ、聞かせて
正しさとか、優しさとか、
あなただったら何を求めている？
いつになったら？
何が叶ったら？
選べないまま「今」を取り零す

サイレンが響く冷え切った世界
際限ない不安に慣れ切ってしまったら
もう二度とは戻れない
鮮やかな情景に脚が竦む
本当に欲しかったものは
本当はね、きっと、なかったよ

何もないなら、迷わないから
知らずにいれた過去を懐かしむ

届かないなら、意味はないから
忘れたふりして嘘を重ねる

選べないなら、次はないから
痛みと共に何を放棄する？

許せないなら、笑えないから
差し伸ばされたその手を振り切って`,
		},
		{
			id: 4,
			title: "after all",
			url: "",
			thumbnail: "/features/after_all.jpg",
			lyrics: `赤橙に沈む視界
温い風に身を委ねて
冷笑に縋るきらい
宛のないSOS

やけに眩しい画面
滑る文字の羅列
時は流れる
なんだか疲れてる

楽天家の化石じみた助言
あの子が孤独を守る理由
哀しいくらい平行線
泣き方も忘れてしまいたい

眠れない夜に呆れながら
でたらめなセリフを並べ立てる
寄る辺ない心を恥じながら
へたくそな笑顔で笑わせて

窓に掛かるカーテン
響く17:00の鐘
ゆらゆら揺れる
なんでか眺めてる

やけに眩しい画面
滑る文字の羅列
時は流れる

哀しいくらい平行線
話し方も忘れてしまいたい

眠れない夜に呆れながら
でたらめなセリフを並べ立てる
寄る辺ない心を恥じながら
へたくそな笑顔で笑わせて`,
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
					<p className="text-xl">2024.11.20</p>
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
									onClick={() => short.url && setOpenVideo(short)}
								>
									<CardContent className="p-0 h-full relative">
										{short.url && (
											<Image
												src={short.thumbnail}
												alt={`Track ${short.id} thumbnail`}
												width={320}
												height={180}
												className="rounded"
											/>
										)}
										{!short.url && (
											<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl">
												Coming Soon
											</div>
										)}
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
					<a
						href="https://tower.jp/item/6473373"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="border transition-transform duration-200 hover:scale-105">
							<Image
								src="/features/ratio_cover.jpg"
								alt="EP Cover"
								width={500}
								height={500}
								className="shadow-2xl"
							/>
						</div>
					</a>
				</section>

				<section
					id="details"
					className={`min-h-screen flex flex-col justify-center items-center p-4 transition-opacity duration-1000 ${
						isVisible.details ? "opacity-100" : "opacity-0"
					}`}
				>
					<h3 className="text-2xl font-bold mb-4">1st EP "Ratio"</h3>
					<p className="text-sm">2024.11.20</p>
					<p className="text-sm">￥1,500</p>
					<p className="text-sm mb-8">SRISR-006</p>
					<ol className="text-xl text-center space-y-1 mb-16">
						{shorts.map((short) => (
							<li key={short.id}>
								{`M${short.id}. ${short.title}`}
								<Dialog>
									<span className="ml-1 inline-block align-[-2px]">
										<DialogTrigger>
											<PiChatTeardropTextLight />
										</DialogTrigger>
									</span>
									<DialogContent className="max-h-full w-10/12 max-w-xl rounded md:rounded-lg">
										<DialogHeader>
											<DialogTitle>{short.title}</DialogTitle>
										</DialogHeader>
										<DialogFooter className="flex text-center text-sm">
											<ScrollArea className="max-h-96">
												<MyMarkdown markdown={short.lyrics} />
											</ScrollArea>
										</DialogFooter>
									</DialogContent>
								</Dialog>
								{short.mv && (
									<a
										href={short.mv}
										target="_blank"
										rel="noreferrer"
										className="ml-1 inline-block align-[-2px]"
									>
										<FaYoutube />
									</a>
								)}
							</li>
						))}
					</ol>
					<p className="w-5/6 md:w-3/6 mb-4">
						現代のアート・ロック――シロイソラ7年目のEPリリース！
					</p>
					<p className="w-5/6 md:w-3/6">
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
					<p className="w-5/6 mt-24 mb-6 md:text-center">
						全国のCDショップでお取り扱いしております。<br />
						※限定ロゴステッカー付き
					</p>
					<ol className="space-y-2 mb-16 text-center">
						<li className="hover:text-sky-200">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://tower.jp/item/6473373"
								className="inline-flex items-center underline hover:no-underline"
							>
								タワーレコード
								<ExternalLinkIcon />
							</a>
						</li>
						<li className="hover:text-sky-200">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.hmv.co.jp/artist_%E3%82%B7%E3%83%AD%E3%82%A4%E3%82%BD%E3%83%A9_000000000974560/item_Ratio_15302554"
								className="inline-flex items-center underline hover:no-underline"
							>
								HMV
								<ExternalLinkIcon />
							</a>
						</li>
						<li className="hover:text-sky-200">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://diskunion.net/jp/ct/detail/1008919188"
								className="inline-flex items-center underline hover:no-underline"
							>
								ディスクユニオン
								<ExternalLinkIcon />
							</a>
						</li>
					</ol>
				</section>
			</div>
		</div>
	);
}
