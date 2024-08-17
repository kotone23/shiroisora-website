"use client";
import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { FaCircleExclamation } from "react-icons/fa6";

export default function ErrorPage() {
	return (
		<section className="flex flex-col items-center">
			<FaCircleExclamation className="text-6xl mt-16" />
			<p className="my-6 w-10/12 sm:w-8/12 mx-auto text-center">
				エラーが発生しました。
			</p>
			<Link href="/" className={`${buttonVariants()} mt-8`}>
				TOP
			</Link>
		</section>
	);
}
