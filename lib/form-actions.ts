"use server";
import { parseWithZod } from "@conform-to/zod";
import { schema } from "./form-schema";

export async function submit(prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, { schema: schema });
	if (submission.status !== "success") {
		return submission.reply();
	}
	return submission.reply();
}
