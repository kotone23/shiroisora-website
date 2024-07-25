import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// convert to YYYY年MM月DD日 format
export function formatDate(input: string): string {
	const date = new Date(input);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	};
	const formatter = new Intl.DateTimeFormat("ja-JP", options);
	return formatter.format(date);
}

// convert to YYYY年MM月DD日(曜日) format
export function formatDateWithWeekday(input: string): string {
	const date = new Date(input);
	// 年月日のフォーマット設定
	const optionsDate: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	};
	// 曜日のフォーマット設定（短い形式）
	const optionsWeekday: Intl.DateTimeFormatOptions = {
		weekday: "narrow",
		timeZone: "UTC",
	};
	// フォーマッターの作成
	const formatterDate = new Intl.DateTimeFormat("ja-JP", optionsDate);
	const formatterWeekday = new Intl.DateTimeFormat("ja-JP", optionsWeekday);

	// 日付と曜日をフォーマット
	const formattedDate = formatterDate.format(date);
	const formattedWeekday = formatterWeekday.format(date);

	// 日付と曜日を組み合わせて返す
	return `${formattedDate}(${formattedWeekday})`;
}

// convert to "DD MMM, YYYY" format
export function formatDateInEnglish(input: string): string {
	const date = new Date(input);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};
	const formatter = new Intl.DateTimeFormat("en-US", options);
	return formatter.format(date).replace(/^(\w{3})/, "$1.");
}

// convert to "YYYY-MM-DD" format
export function formatDateForDateTime(input: string): string {
	const date = new Date(input);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

// 与えられた時間が今日以前の日かどうかを判定する
export function isPastLive(dateString: string) {
	const japanTimeZone = "Asia/Tokyo";
	const liveDate = new Date(dateString); // live date is provided in UTC 00:00
	const liveDateJapan = new Date(
		liveDate.toLocaleString("en-US", { timeZone: japanTimeZone }),
	); // convert to Japan time 09:00
	const nowJapan = new Date(
		new Date().toLocaleString("en-US", { timeZone: japanTimeZone }),
	);

	liveDateJapan.setHours(0, 0, 0, 0);
	nowJapan.setHours(0, 0, 0, 0);

	return liveDateJapan < nowJapan;
}
