import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

type ContentfulEntryType = "live" | "media" | "release" | "liveMusicClub" | "song";

type ContentfulRequestBody = {
	metadata: {
		tags?: ContentfulEntryType[];
	}
	sys: {
		type: "Entry" | "Asset" | "ContentType";
		id: string;
		contentType?: {
			sys: {
				id: ContentfulEntryType;
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

	// if metadata.tags includes any tag, revalidate the tags
	const body: ContentfulRequestBody = await request.json();
	if (body.metadata.tags?.length) {
		for (const tag of body.metadata.tags) {
			revalidateTag(tag);
		}	
		return NextResponse.json({ revalidated: true, updatedType: body.metadata.tags });
	}

	// if not entry is updated, no revalidation is needed
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
