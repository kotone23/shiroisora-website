import LiveEntry from "@/app/components/LiveEntry";
import { getLiveContents } from "@/lib/cms";
import { draftMode } from "next/headers";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'シロイソラ | Live',
  description: 'シロイソラ | Live',
}


export default async function LivePage() {
	const { isEnabled } = draftMode();
	const contents = await getLiveContents(isEnabled);
	const now = new Date();
	const futureLives = contents.filter(
		(content) => new Date(content.date) > new Date(),
	);

	return (
		<div className="container max-w-screen-lg mx-auto px-4">
			<h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">Live</h1>
			{futureLives.length > 0 ? (
				contents
					.filter((content) => new Date(content.date) > now)
					.map((content) => (
						<LiveEntry
							key={content.sys.id}
							title={content.title}
							venue={content.venue}
							time={content.time}
							charge={content.charge}
							performers={content.performers}
							date={content.date}
							description={content.description}
							setlistCollection={content.setlistCollection}
							encore={content.encore}
							imagesCollection={content.imagesCollection}
						/>
					))
			) : (
				<p className="flex justify-center mt-10 mb-16">
					今後のライブは予定が決まり次第お知らせいたします
				</p>
			)}

			<h2 className="flex justify-center text-3xl font-semibold mt-8 mb-8">
				Past live
			</h2>

			{contents
				.filter((content) => new Date(content.date) < now)
				.map((content) => (
					<LiveEntry
						key={content.sys.id}
						title={content.title}
						venue={content.venue}
						time={content.time}
						charge={content.charge}
						performers={content.performers}
						date={content.date}
						description={content.description}
						setlistCollection={content.setlistCollection}
						encore={content.encore}
						imagesCollection={content.imagesCollection}
					/>
				))}
		</div>
	);
}
