import Inquiry from "@/app/components/Inquiry";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "シロイソラへのお問い合わせフォーム",
	openGraph: {
		title: "Contact",
	},
};

export default function ContactPage() {
	return (
		<main className="container max-w-screen-lg mx-auto px-4">
			<h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">
				Contact
			</h1>
			<p className="flex justify-center mt-10 mb-10 w-10/12 sm:w-8/12 mx-auto">
				ライブチケットのご予約や出演依頼はこちらのフォームからお願いいたします。
				<br />
				チケットのご予約の場合はライブの日程と枚数を必ずご記入ください（Googleフォームからもご予約いただけます）。
			</p>
			<Inquiry />
		</main>
	);
}
