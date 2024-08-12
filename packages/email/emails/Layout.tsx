import {
	Body,
	Container,
	Head,
	Html,
	Img,
  Link,
	Preview,
	Section,
	Tailwind,
  Text,
} from "@react-email/components";
import type * as React from "react";

export const EmailLayout = ({
  preview,
	children,
}: {
  preview: string;
	children: React.ReactNode;
}) => {
	const thisYear = new Date().getFullYear();
	return (
		<Html lang="ja">
			<Head />
			<Preview>{preview}</Preview>
			<Tailwind>
				<Body className="bg-gray-100 font-sans">
					<Container className="mx-auto p-4 max-w-screen-sm">
						<Section className="mb-4">
							<Img
								src="https://s3.jp-tok.cloud-object-storage.appdomain.cloud/cloud-object-storage-shiroisora/logo_gray100.png"
								width="80"
								height="80"
								alt="shiroisora_logo"
								className="mx-auto"
							/>
						</Section>
            <Section className="bg-white p-6 rounded shadow">
              {children}
            </Section>
						<Text className="text-sm text-gray-500 text-center">
							© 2017-{thisYear} | Shiroisora, All rights reserved. |{" "}
							<Link
								href="https://shiroisora.com"
								className="text-gray-500 underline"
							>
								shiroisora.com
							</Link>
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailLayout;