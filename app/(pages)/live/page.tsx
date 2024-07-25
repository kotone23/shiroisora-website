import LiveEntry from "@/app/components/LiveEntry";
import { getLiveContents } from "@/lib/cms";
import { isPastLive } from "@/lib/utils";
import type { Metadata } from "next";
import { draftMode } from "next/headers";

export const metadata: Metadata = {
	title: "Live",
	description: "シロイソラのライブスケジュールと過去のライブ情報",
	openGraph: {
		title: "Live",
	},
};

export default async function LivePage() {
	const { isEnabled } = draftMode();
	const contents = await getLiveContents(isEnabled);
	const futureLives = contents
		.filter((content) => !isPastLive(content.date))
		.reverse();

	return (
		<main className="container max-w-screen-lg mx-auto px-4">
			<h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">Live</h1>
			{futureLives.length > 0 ? (
				futureLives.map((live) => <LiveEntry key={live.sys.id} {...live} />)
			) : (
				<p className="flex justify-center mt-10 mb-16">
					今後のライブは予定が決まり次第お知らせいたします
				</p>
			)}

			<h2 className="flex justify-center text-3xl font-semibold mt-8 mb-8">
				Past live
			</h2>

			{contents
				.filter((live) => isPastLive(live.date))
				.map((live) => (
					<LiveEntry key={live.sys.id} {...live} />
				))}
		</main>
	);
}
