import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ViewTransitions>
			<html lang="ja">
				<body>{children}</body>
			</html>
		</ViewTransitions>
	);
}
