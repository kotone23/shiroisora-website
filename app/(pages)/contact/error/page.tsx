import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { TWITTER_NAME } from "@/lib/band-metadata";
import { FaCircleExclamation } from "react-icons/fa6";

export default function ContactPage() {
	return (
		<section className="flex flex-col items-center">
			<FaCircleExclamation className="text-6xl mt-6" />
			<p className="my-6 w-10/12 sm:w-8/12 mx-auto text-center">
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
			</p>
			<Link href="/" className={`${buttonVariants()} mt-8`}>
				TOP
			</Link>
		</section>
	);
}
