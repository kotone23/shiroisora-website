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
		<>
			<p className="justify-center mt-10 mb-10 w-10/12 sm:w-8/12 mx-auto">
				ライブチケットのご予約や出演依頼はこちらのフォームからお願いいたします。
				<br />
				チケットのご予約の場合はライブの日程と枚数を必ずご記入ください（
				<a
					href="https://forms.gle/AFFUcEWdBtPC99g2A"
					target="_blank"
					rel="noreferrer"
					className="text-blue-800 underline"
				>
					Googleフォーム
				</a>
				からもご予約いただけます）。
			</p>
			<Inquiry />
		</>
	);
}
