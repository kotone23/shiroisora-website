"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { FaCircleExclamation } from "react-icons/fa6";

export default function NotFound() {
	return (
		<>
			<section className="flex flex-col items-center">
				<FaCircleExclamation className="text-6xl mt-16" />
				<p className="my-6 w-10/12 sm:w-8/12 mx-auto text-center">
					エラーが発生しました。
				</p>
				<Button className="w-16 mt-12 mb-auto">
					<Link href="/">TOP</Link>
				</Button>
			</section>
		</>
	);
}
