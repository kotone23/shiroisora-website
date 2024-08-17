"use client";
import { Field, FieldError } from "@/app/components/FormField";
import { InputConform } from "@/app/components/conform/Input";
import { RadioGroupConform } from "@/app/components/conform/RadioGroup";
import { TextareaConform } from "@/app/components/conform/Textarea";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { submit } from "@/lib/form-actions";
import { schema } from "@/lib/form-schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState, useFormStatus } from "react-dom";

function Submit() {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending}>
			{pending ? "送信中…" : "送信"}
		</Button>
	);
}

export default function Inquiry() {
	const [result, action] = useFormState(submit, undefined);
	const [form, fields] = useForm({
		lastResult: result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema });
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});
	return (
		<div className="flex flex-col">
			<form
				id={form.id}
				onSubmit={form.onSubmit}
				action={action}
				className="flex flex-col justify-center mx-auto gap-5 w-10/12 sm:w-8/12 mb-10"
			>
				<Field>
					<Label htmlFor={fields.name.id}>お名前</Label>
					<InputConform
						meta={fields.name}
						type="text"
						className={
							fields.name.errors && "border-red-500 focus-visible:ring-red-500"
						}
					/>
					{fields.name.errors && <FieldError>{fields.name.errors}</FieldError>}
				</Field>
				<Field>
					<Label htmlFor={fields.email.id}>メールアドレス</Label>
					<InputConform
						meta={fields.email}
						type="email"
						className={
							fields.email.errors && "border-red-500 focus-visible:ring-red-500"
						}
					/>
					{fields.email.errors && (
						<FieldError>{fields.email.errors}</FieldError>
					)}
				</Field>
				<Field>
					<Label htmlFor={fields.type.id}>お問い合わせ種別</Label>
					<RadioGroupConform
						meta={fields.type}
						items={[
							{ value: "reservation", label: "チケットご予約" },
							{ value: "inquiry", label: "ご依頼" },
							{ value: "other", label: "その他" },
						]}
					/>
					{fields.type.errors && <FieldError>{fields.type.errors}</FieldError>}
				</Field>
				<Field>
					<Label htmlFor={fields.message.id}>お問い合わせ内容</Label>
					<TextareaConform
						meta={fields.message}
						className={
							fields.message.errors &&
							"border-red-500 focus-visible:ring-red-500"
						}
					/>
					{fields.message.errors && (
						<FieldError>{fields.message.errors}</FieldError>
					)}
				</Field>
				<Field>
					<div className="flex justify-center mx-auto w-1/4 gap-2">
						<Submit />
						<Button
							variant="secondary"
							type="reset"
							{...form.reset.getButtonProps()}
						>
							リセット
						</Button>
					</div>
				</Field>
			</form>
		</div>
	);
}
