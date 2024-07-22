import MediaEntry from "@/app/components/MediaEntry";
import { getMediaContents } from "@/lib/cms";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
	title: "シロイソラ | Media",
	description: "シロイソラ | Media",
};

export default async function MediaPage() {
	const { isEnabled } = draftMode();
	const contents = await getMediaContents(isEnabled);

	return (
		<div className="container max-w-screen-lg mx-auto px-4">
			<h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">
				Media
			</h1>
			{contents.map((content) => (
				<MediaEntry key={content.sys.id} {...content} />
			))}
		</div>
	);
}
