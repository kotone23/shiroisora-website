import { draftMode } from "next/headers";

export async function GET() {
	(await draftMode()).disable();

	return new Response('Draft Mode Disabled. <br/><a href="/">Back</a>', {
		status: 200,
		headers: {
			"Content-Type": "text/html",
		},
	});
}
