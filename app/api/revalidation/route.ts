import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type ContentfulEntryType = "live" | "media" | "release" | "liveMusicClub" | "song";
type ContentfulTagObject = {
	sys: {
		id: ContentfulEntryType
	}
};
type ContentfulRequestBody = {
	metadata?: {
		tags?: ContentfulTagObject[];
	}
	sys: {
		type: "Entry" | "Asset" | "ContentType" | "DeletedEntry" | "DeletedAsset";
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
	if (body.metadata?.tags?.length) {
		const tags = [];
		for (const tagObject of body.metadata.tags) {
			const tag = tagObject.sys.id;
			tags.push(tag);
			revalidateTag(tag);
		}	
		return NextResponse.json({ revalidated: true, updatedType: tags });
	}

	// if not entry is updated, no revalidation is needed
	if (body.sys.type !== "Entry" && body.sys.type !== "DeletedEntry") {
		return NextResponse.json({ revalidated: false, updatedType: body.sys.type });
	} 
	
	const contentType = body.sys.contentType?.sys.id;
	if (!contentType) {
		return NextResponse.json({ revalidated: false, updatedType: "unknown" });
	} 
	revalidateTag(contentType);

	return NextResponse.json({ revalidated: true, updatedType: contentType});
}
