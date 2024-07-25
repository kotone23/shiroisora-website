import { ReleaseEntry } from "@/app/components/ReleaseEntry";
import { getReleaseContents } from "@/lib/cms";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
	title: "Discography",
	description: "シロイソラの楽曲リリース情報",
	openGraph: {
		title: "Discography",
	},
};

export default async function DiscographyPage() {
	const { isEnabled } = draftMode();
	const contents = await getReleaseContents(isEnabled);

	return (
		<main className="flex flex-col items-center justify-center p-4 md:p-6">
			<h1 className="text-4xl font-bold mt-2 mb-8">Discography</h1>
			<section className="grid grid-cols-1 gap-4 md:gap-6 xl:gap-8">
				{contents.map((release) => (
					<ReleaseEntry key={release.sys.id} {...release} />
				))}
			</section>
		</main>
	);
}
