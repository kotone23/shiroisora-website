import { Heading, Hr, Text } from "@react-email/components";
import * as React from "react";
import EmailLayout from "./Layout";
import type { FormValues } from "@/lib/form-schema";
import DOMPurify from "isomorphic-dompurify";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

const sanitize = (input: string): string => {
	return DOMPurify.sanitize(input);
};

export const InquiryEmail = ({ name, email, type, message }: FormValues) => {
	const inquiryType = {
		reservation: "予約",
		inquiry: "お問い合わせ",
		other: "その他",
	}[type];
	return (
		<EmailLayout preview="新規のお問い合わせが届きました">
			<Heading className="text-lg font-bold text-gray-800">
				お問い合わせを受け付けました
			</Heading>
			<Hr />
			<Text className="text-gray-700">お名前：{sanitize(name)} 様</Text>
			<Text className="text-gray-700">メールアドレス：{sanitize(email)}</Text>
			<Text className="text-gray-700">種別：{inquiryType}</Text>
			<Hr />
			<ReactMarkdown
				remarkPlugins={[remarkBreaks]}
				components={{
					p: ({ node, ...props }) => {
						return <p className="text-gray-900">{props.children}</p>;
					},
				}}
			>
				{sanitize(message.replace(/\n\n/gi, "\n &nbsp; \n"))}
			</ReactMarkdown>
		</EmailLayout>
	);
};

export default InquiryEmail;
