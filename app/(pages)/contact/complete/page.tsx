import { InformationBlock } from "@/app/components/NotificationBlocks";

export default function ContactPage() {
	return (
		<InformationBlock>
			お問い合わせありがとうございました。
			<br className="hidden md:inline" />
			自動返信メールが届いていることをご確認ください。
		</InformationBlock>
	);
}
