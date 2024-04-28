"use client";
import { submit } from "@/lib/form-actions";
import { schema } from "@/lib/form-schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Field, FieldError } from "../components/FormField";
import { InputConform } from "../components/conform/Input";
import { RadioGroupConform } from "../components/conform/RadioGroup";
import { TextareaConform } from "../components/conform/Textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../components/ui/use-toast";

function Submit() {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" disabled={pending}>
			{pending ? "送信中…" : "送信"}
		</Button>
	);
}

export default function ContactPage() {
	const [result, action] = useFormState(submit, undefined);
	const [form, fields] = useForm({
		lastResult: result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema });
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});
	const { toast } = useToast();
	useEffect(() => {
		if (result?.status === "success") {
			toast({
				title: "お問い合わせが送信されました",
				description: "自動返信メールが届いているかご確認ください",
			});
		} else if (result?.status === "error") {
			toast({
				variant: "destructive",
				title: "送信エラーが発生しました",
				description: "お急ぎの場合は@shiroisorabandまで",
			});
		}
	}, [result, toast]);
	return (
		<div className="container max-w-screen-lg mx-auto px-4">
			<h1 className="flex justify-center text-4xl font-bold mt-8 mb-8">
				Contact
			</h1>
			<div className="flex justify-center mt-10 mb-10 w-10/12 sm:w-8/12 mx-auto">
				ライブチケットのご予約や出演依頼はこちらのフォームからお願いいたします。
				<br />
				チケットのご予約の場合はライブの日程と枚数を必ずご記入ください（Googleフォームからもご予約いただけます）。
			</div>
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
								fields.name.errors &&
								"border-red-500 focus-visible:ring-red-500"
							}
						/>
						{fields.name.errors && (
							<FieldError>{fields.name.errors}</FieldError>
						)}
					</Field>
					<Field>
						<Label htmlFor={fields.email.id}>メールアドレス</Label>
						<InputConform
							meta={fields.email}
							type="email"
							className={
								fields.email.errors &&
								"border-red-500 focus-visible:ring-red-500"
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
						{fields.type.errors && (
							<FieldError>{fields.type.errors}</FieldError>
						)}
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
			<Toaster />
		</div>
	);
}
