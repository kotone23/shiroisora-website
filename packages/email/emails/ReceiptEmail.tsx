import { Heading, Text } from "@react-email/components";
import * as React from "react";
import EmailLayout from "./Layout";
import type { FormValues } from "@/lib/form-schema";
import DOMPurify from "isomorphic-dompurify";

const sanitize = (input: string): string => {
	return DOMPurify.sanitize(input);
};

export const ReceiptEmail = ({ name, email, type, message }: FormValues) => {
	return (
		<EmailLayout preview="お問い合わせありがとうございます">
			<Heading className="text-lg font-bold text-gray-800">
				お問い合わせを受け付けました
			</Heading>
			<Text className="text-gray-700">{sanitize(name)} 様</Text>
			<Text className="text-gray-700">
				この度はお問い合わせいただきありがとうございます。内容を確認の上、ご連絡させていただきます。しばらくお待ちくださいますようお願い申し上げます。
			</Text>
			<Text className="text-gray-700">
				※本メールは自動送信されています。返信はご遠慮ください。
			</Text>
		</EmailLayout>
	);
};

export default ReceiptEmail;
