import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const page = searchParams.get("page")

  if (!secret) {
    return new Response("Missing parameters", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  draftMode().enable();
  switch (page) {
    case 'live': redirect("/live"); break;
    case 'discography': redirect("/discography"); break;
    case 'media': redirect("/media"); break;
    default: redirect("/");
  }
}