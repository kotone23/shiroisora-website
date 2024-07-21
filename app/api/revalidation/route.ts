import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

type ContentfulRequestBody = {
	sys: {
		type: "Entry" | "Asset" | "ContentType";
		id: string;
		contentType?: {
			sys: {
				id: "live" | "media" | "release" | "liveMusicClub" | "song";
			};
		};
	};
};

export async function POST(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);
	const secret = requestHeaders.get("x-vercel-reval-key");

	if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
		return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
	}

	// if not entry is updated, no revalidation is needed
	const body: ContentfulRequestBody = await request.json();
	if (body.sys.type !== "Entry") {
		return NextResponse.json({ revalidated: false, updatedType: body.sys.type });
	} 
	
	const contentType = body.sys.contentType?.sys.id;
	if (!contentType) {
		return NextResponse.json({ revalidated: false, updatedType: "unknown" });
	} 
	revalidateTag(contentType);

	return NextResponse.json({ revalidated: true, updatedType: contentType});
}
