import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

export default function ContactPage() {
	return (
		<>
			<section className="flex flex-col items-center">
        <FaCircleCheck className="text-6xl mt-6" />
				<p className="my-6 w-10/12 sm:w-8/12 mx-auto text-center">
					お問い合わせありがとうございました。
					<br className="hidden md:inline" />
					自動返信メールが届いていることをご確認ください。
				</p>
				<Button className="w-16 mt-12 mb-auto">
					<Link href="/">TOP</Link>
				</Button>
			</section>
		</>
	);
}
