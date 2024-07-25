import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/app/components/ui/dialog";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { formatDateInEnglish, formatDateForDateTime } from "@/lib/utils";
import type React from "react";
import { FaApple, FaSpotify, FaYoutube } from "react-icons/fa6";
import { PiChatTeardropTextLight } from "react-icons/pi";
import MyMarkdown from "./MyMarkdown";

import type { Release, Song } from "@/lib/types";

type ReleaseProps = Omit<Release, "sys">;
type SongWithIndex = Song & {
	index: number;
};

const SongEntry: React.FC<SongWithIndex> = ({
	index,
	title,
	lyrics,
	spotifyLink,
	appleMusicLink,
	youTubeLink,
}) => {
	const formattedIndex = index.toString().padStart(2, "0");
	return (
		<p>
			{formattedIndex}. {title}
			{lyrics && (
				<Dialog>
					<span className="ml-1 inline-block align-[-2px]">
						<DialogTrigger>
							<TooltipProvider delayDuration={200}>
								<Tooltip>
									<TooltipTrigger asChild>
										<PiChatTeardropTextLight />
									</TooltipTrigger>
									<TooltipContent>
										<p>歌詞を表示</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</DialogTrigger>
					</span>
					<DialogContent className="max-h-full w-10/12 max-w-xl rounded-lg">
						<DialogHeader>
							<DialogTitle>{title}</DialogTitle>
						</DialogHeader>
						<DialogFooter className="flex text-center text-sm">
							<ScrollArea className="max-h-96">
								<MyMarkdown markdown={lyrics} />
							</ScrollArea>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
			{/* {spotifyLink && (
				<a
					href={spotifyLink.toString()}
					target="_blank"
					rel="noreferrer"
					className="ml-1 inline-block align-[-2px]"
				>
					<FaSpotify />
				</a>
			)}
			{appleMusicLink && (
				<a
					href={appleMusicLink.toString()}
					target="_blank"
					rel="noreferrer"
					className="ml-1 inline-block align-[-2px]"
				>
					<FaApple />
				</a>
			)} */}
			{youTubeLink && (
				<a
					href={youTubeLink.toString()}
					target="_blank"
					rel="noreferrer"
					className="ml-1 inline-block align-[-2px]"
				>
					<FaYoutube />
				</a>
			)}
		</p>
	);
};

export const ReleaseEntry: React.FC<ReleaseProps> = ({
	title,
	releaseType,
	releaseDate,
	songCollection,
	price,
	spotifyLink,
	appleMusicLink,
	coverImage,
	description,
}) => {
	const coverImageUrl = coverImage?.url.toString() ?? "/placeholder.svg";
	return (
		<Card className="w-lg max-w-xl p-6">
			<CardHeader className="grid gap-1 text-center space-y-0 p-0">
				<CardTitle className="text-lg">{title}</CardTitle>
				<CardDescription className="text-xs">
					{releaseType} - <time dateTime={formatDateForDateTime(releaseDate)}>{formatDateInEnglish(releaseDate)}</time>
				</CardDescription>
				{price && (
					<CardDescription className="text-sm">{price}</CardDescription>
				)}
				{(spotifyLink || appleMusicLink) && (
					<CardDescription className="flex justify-center space-x-2">
						{spotifyLink && (
							<a href={spotifyLink.toString()} target="_blank" rel="noreferrer">
								<FaSpotify />
							</a>
						)}
						{appleMusicLink && (
							<a
								href={appleMusicLink.toString()}
								target="_blank"
								rel="noreferrer"
							>
								<FaApple />
							</a>
						)}
					</CardDescription>
				)}
			</CardHeader>
			<CardContent className="flex flex-col md:flex-row items-center gap-8 justify-center mt-4">
				<img
					alt={`${title} カバー画像`}
					className="object-cover"
					height={240}
					src={coverImageUrl}
					style={{
						aspectRatio: "240/240",
						objectFit: "cover",
					}}
					width={240}
				/>
				<div className="p-0 grid gap-2 text-sm">
					{songCollection.items.map((song, index) => (
						<SongEntry key={song.sys.id} index={index + 1} {...song} />
					))}
				</div>
			</CardContent>
			{description && (
				<CardFooter className="text-sm mt-4">
					<MyMarkdown markdown={description} />
				</CardFooter>
			)}
		</Card>
	);
};
