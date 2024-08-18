import Link from "next/link";
import { buttonVariants } from "@/app/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";

function NotificationBlock({
	icon,
	children,
}: {
	icon: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center py-16">
			{icon}
			<p className="my-6 w-10/12 sm:w-8/12 mx-auto text-center">{children}</p>
			<Link href="/" className={`${buttonVariants()} mt-8`}>
				TOP
			</Link>
		</section>
	);
}

export function InformationBlock({ children }: { children: React.ReactNode }) {
	return (
		<NotificationBlock icon={<FaCircleCheck className="text-6xl" />}>
			{children}
		</NotificationBlock>
	);
}

export function WarningBlock({ children }: { children: React.ReactNode }) {
	return (
		<NotificationBlock icon={<FaCircleExclamation className="text-6xl" />}>
			{children}
		</NotificationBlock>
	);
}
