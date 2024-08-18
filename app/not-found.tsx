import PageLayout from "./(pages)/layout";
import { WarningBlock } from "./components/NotificationBlocks";
import type { Metadata } from "next";

export const metadata: Metadata = {
	robots: {
		index: false,
	}
};

export default function NotFound() {
	return (
		<PageLayout>
			<WarningBlock>お探しのページが見つかりませんでした。</WarningBlock>
		</PageLayout>
	);
}
