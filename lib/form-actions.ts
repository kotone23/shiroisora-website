"use server";
import { parseWithZod } from "@conform-to/zod";
import { schema } from "./form-schema";
import { Resend } from "resend";
import ReceiptEmail from "@/packages/email/emails/ReceiptEmail";
import InquiryEmail from "@/packages/email/emails/InquiryEmail";
import { ADMIN_EMAIL } from "./band-metadata";
import { redirect } from "next/navigation";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submit(prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, { schema: schema });
	if (submission.status !== "success") {
		return submission.reply();
	}
	let status = "error";
	try {
		const to = submission.value.email;
		const InquiryText = await render(InquiryEmail(submission.value), {
			plainText: true,
		});
		const { data: adminData, error: adminError } = await resend.emails.send({
			from: ADMIN_EMAIL,
			to: ADMIN_EMAIL,
			subject: "お問い合わせ受付のお知らせ",
			reply_to: to,
			react: InquiryEmail(submission.value),
			text: InquiryText,
		});

		if (adminError) {
			console.error(adminError);
		}
		const receiptText = await render(ReceiptEmail(submission.value), {
			plainText: true,
		});
		const { data: resendData, error: resendError } = await resend.emails.send({
			from: ADMIN_EMAIL,
			to: [to],
			subject: "お問い合わせ受付のお知らせ",
			react: ReceiptEmail(submission.value),
			text: receiptText,
		});

		if (resendError) {
			console.error(resendError);
		}
		status = "complete";
	} catch (error) {
		console.error(error);
	}
	redirect(`/contact/${status}`);
}
