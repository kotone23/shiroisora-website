import PageLayout from "./(pages)/layout";
import { WarningBlock } from "./components/NotificationBlocks";

export default function NotFound() {
	return (
		<PageLayout>
			<WarningBlock>お探しのページが見つかりませんでした。</WarningBlock>
		</PageLayout>
	);
}
