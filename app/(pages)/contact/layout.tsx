import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "シロイソラへのお問い合わせフォーム",
	openGraph: {
		title: "Contact",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="container max-w-screen-lg mx-auto px-4">
			<h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">
				Contact
			</h1>
			{children}
		</main>
	);
}
