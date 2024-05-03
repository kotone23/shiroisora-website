import { Discography } from "@/app/components/discography";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "WHITE SKY | Discography",
	description: "WHITE SKY | Discography",
};

export default function DiscographyPage() {
	return <Discography />;
}
