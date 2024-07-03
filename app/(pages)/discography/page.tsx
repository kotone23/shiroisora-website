import { Discography } from "@/app/components/discography";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "シロイソラ | Discography",
	description: "シロイソラ | Discography",
};

export default function DiscographyPage() {
	return <Discography />;
}
