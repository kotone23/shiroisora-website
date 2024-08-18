import { TWITTER_NAME } from "@/lib/band-metadata";
import { WarningBlock } from "@/app/components/NotificationBlocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: {
		index: false,
	}
};

export default function ContactPage() {
	return (
		<WarningBlock>
			お問い合わせの送信に失敗しました。
			<br className="hidden md:inline" />
			お手数ですが、お急ぎの場合は{" "}
			<a
				href={`https://x.com/${TWITTER_NAME}`}
				className="underline"
				target="_blank"
				rel="noreferrer"
			>
				@{TWITTER_NAME}
			</a>{" "}
			までご連絡ください。
		</WarningBlock>
	);
}
