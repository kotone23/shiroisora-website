import type React from "react";
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/app/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/app/components/ui/dialog";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { FaYoutube, FaSpotify, FaApple } from "react-icons/fa6";

import type { Release } from "@/lib/types";

type ContentProps = Omit<Release, "sys">;

export const ReleaseEntry: React.FC<ContentProps> = ({
	title,
	releaseType,
	releaseDate,
	songCollection,
}) => {
	return (
		<Card className="w-lg max-w-xl p-6">
			<CardHeader className="grid gap-1 text-center space-y-0 p-0">
				<CardTitle className="text-lg">{title}</CardTitle>
				<CardDescription className="text-xs">
					{releaseType} - {releaseDate}
				</CardDescription>
				<CardDescription className="flex justify-center space-x-2">
					<a href="https://open.spotify.com" target="_blank" rel="noreferrer">
						<FaSpotify />
					</a>
					<a href="https://music.apple.com" target="_blank" rel="noreferrer">
						<FaApple />
					</a>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row items-center gap-8 justify-center mt-4">
				<img
					alt="Album Cover"
					className="object-cover"
					height={240}
					src="/placeholder.svg"
					style={{
						aspectRatio: "240/240",
						objectFit: "cover",
					}}
					width={240}
				/>
				<div className="p-0 grid gap-2 text-sm">
					{songCollection.items.map((song) => (
						<div key={song.sys.id}>
							{song.title}
							<Dialog>
								<DialogTrigger>
									<PiChatTeardropTextLight />
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>{song.title}</DialogTitle>
									</DialogHeader>
									<DialogDescription>
										<ScrollArea>{song.lyrics}</ScrollArea>
									</DialogDescription>
									<DialogFooter>
										<a
											href="https://www.youtube.com"
											target="_blank"
											rel="noreferrer"
										>
											<FaYoutube />
										</a>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<p className="text-center text-sm">More info</p>
			</CardFooter>
		</Card>
	);
};
