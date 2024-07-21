import type React from "react";
import { MdPeopleAlt } from "react-icons/md";
import { FaRegClock, FaYenSign, FaItunesNote } from "react-icons/fa6";
import ImageDialog from "../components/ui/imagedialog";
import MyMarkdown from "./MyMarkdown";
import { formatDate, isPastLive } from "@/lib/utils";
import type { Live } from "@/lib/types";

type LiveProps = Omit<Live, "sys">;

const LiveEntry: React.FC<LiveProps> = ({
	title,
	venue,
	date,
	time,
	charge,
	performers,
	description,
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
		<div className="border-t py-4 md:flex">
			<div className="text-muted-foreground md:w-1/6 md:px-4 md:mt-0.5">
				{formatDate(date)}
			</div>
			<div className="md:w-5/6 md:pl-4">
				<h3 className="text-lg font-bold">{title}</h3>
				{!venue?.url ? (
					<p className="text-muted-foreground mb-4">{venue?.name}</p>
				) : (
					<p className="text-muted-foreground mb-4 underline">
						<a href={`${venue.url}`} rel="noreferrer" target="_blank">
							{venue.name}
						</a>
					</p>
				)}
				<div className="grid gap-0.5">
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
				{description && (
					<div className="mt-3">
						<MyMarkdown markdown={description} />
					</div>
				)}
			</div>
		</div>
	);
};

export default LiveEntry;
