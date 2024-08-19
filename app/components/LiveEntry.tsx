import type { Live } from "@/lib/types";
import { formatDate, formatDateForDateTime, isPastLive } from "@/lib/utils";
import type React from "react";
import {
	FaLocationDot,
	FaItunesNote,
	FaRegClock,
	FaYenSign,
} from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import ImageDialog from "../components/ui/imagedialog";
import MyMarkdown from "./MyMarkdown";

type LiveProps = Omit<Live, "sys">;

const LiveEntry: React.FC<LiveProps> = ({
	title,
	venue,
	date,
	time,
	charge,
	performers,
	description,
	commentary,
	setlistCollection,
	encore,
	imagesCollection,
}) => {
	const setlistString = setlistCollection.items
		.map((item, index, array) => {
			if (encore === null || encore === 0) {
				return `${index + 1}.${item.title}`;
			}
			const encoreStartIndex = array.length - encore;
			if (index >= encoreStartIndex) {
				const encoreNumber = index - encoreStartIndex + 1;
				if (encore === 1) {
					return `En.${item.title}`;
				}
				return `En${encoreNumber}.${item.title}`;
			}
			return `${index + 1}.${item.title}`;
		})
		.join("　");

	return (
		<article className="border-t py-4 md:flex">
			<div className="text-muted-foreground md:w-1/6 md:px-4 md:mt-0.5">
				<time dateTime={formatDateForDateTime(date)}>{formatDate(date)}</time>
			</div>
			<div className="md:w-5/6 md:pl-4">
				<h3 className="text-lg font-bold mb-4">{title}</h3>
				<div className="grid gap-0.5">
					<div className="flex items-start gap-3">
						<FaLocationDot className="flex-shrink-0 mt-1.5" />
						{!venue.url ? (
							<p className="flex-grow min-w-0">{venue.name}</p>
						) : (
							<p className="flex-grow min-w-0 underline">
								<a href={`${venue.url}`} rel="noreferrer" target="_blank">
									{venue.name}
								</a>
							</p>
						)}
					</div>
					{time && (
						<div className="flex items-start gap-3">
							<FaRegClock className="flex-shrink-0 mt-1.5" />
							<p className="flex-grow min-w-0">{time}</p>
						</div>
					)}
					{!isPastLive(date) && charge && (
						<div className="flex items-start gap-3">
							<FaYenSign className="flex-shrink-0 mt-1.5" />
							<p className="flex-grow min-w-0">{charge}</p>
						</div>
					)}
					{performers && (
						<div className="flex items-start gap-3">
							<MdPeopleAlt className="flex-shrink-0 mt-1.5" />
							<p className="flex-grow min-w-0">{performers}</p>
						</div>
					)}
					{isPastLive(date) && setlistCollection.items.length > 0 && (
						<div className="flex items-start gap-3">
							<FaItunesNote className="flex-shrink-0 mt-1.5" />
							<p className="flex-grow min-w-0">{setlistString}</p>
						</div>
					)}
					{imagesCollection.items.length > 0 && (
						<div className="mt-2 flex gap-4 justify-start">
							{imagesCollection.items.map((image) => (
								<ImageDialog key={image.sys.id} imageSrc={`${image.url}`} />
							))}
						</div>
					)}
				</div>
				{!isPastLive(date) && description && (
					<div className="mt-3">
						<MyMarkdown markdown={description} />
					</div>
				)}
				{isPastLive(date) && commentary && (
					<div className="mt-3">
						<MyMarkdown markdown={commentary} />
					</div>
				)}
			</div>
		</article>
	);
};

export default LiveEntry;
