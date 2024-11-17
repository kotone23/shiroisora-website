import { InformationBlock } from "@/app/components/NotificationBlocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: {
		index: false,
	},
};

export default function ContactPage() {
	return (
		<InformationBlock>
			お問い合わせありがとうございました。
			<br className="hidden md:inline" />
			自動返信メールが届いていることをご確認ください。
		</InformationBlock>
	);
}
