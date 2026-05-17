import { ReleaseEntry } from "@/app/components/ReleaseEntry";
import { getReleaseContents } from "@/lib/cms";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
	title: "Discography",
	description: "白イ空の楽曲リリース情報",
	openGraph: {
		title: "Discography",
	},
};

export default async function DiscographyPage() {
	const { isEnabled } = await draftMode();
	const contents = await getReleaseContents(isEnabled);

	return (
		<main className="flex flex-col items-center justify-center p-0 lg:p-6">
			<h1 className="text-4xl font-bold mt-0 mb-8">Discography</h1>
			<section className="grid grid-cols-1 gap-6 md:gap-8">
				{contents.map((release) => (
					<ReleaseEntry key={release.sys.id} {...release} />
				))}
			</section>
		</main>
	);
}
