import type React from "react";
import MyMarkdown from "./MyMarkdown";
import { formatDate, formatDateForDateTime } from "@/lib/utils";
import type { Media } from "@/lib/types";

type ContentProps = Omit<Media, "sys">;

const MediaEntry: React.FC<ContentProps> = ({ date, description }) => (
	<article className="border-t py-4 md:flex">
		<div className="text-muted-foreground md:w-1/6 md:px-4 md:mt-0.5">
			<time dateTime={formatDateForDateTime(date)}>{formatDate(date)}</time>
		</div>
		<div className="md:w-5/6 md:pl-4">
			<MyMarkdown markdown={description} />
		</div>
	</article>
);

export default MediaEntry;
