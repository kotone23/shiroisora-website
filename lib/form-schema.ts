import { z } from "zod";

export const schema = z.object({
	name: z
		.string({ required_error: "名前は入力必須です" })
		.min(2, "名前は2文字以上で入力してください"),
	email: z
		.string({ required_error: "メールアドレスは入力必須です" })
		.email("メールアドレスの形式が正しくありません"),
	type: z.enum(["reservation", "inquiry", "other"], {
		required_error: "お問い合わせ種別は選択必須です",
	}),
	message: z
		.string({ required_error: "お問い合わせ内容は入力必須です" })
		.min(5, "お問い合わせ内容は5文字以上で入力してください"),
});

export type FormValues = z.infer<typeof schema>;
