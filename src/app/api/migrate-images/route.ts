import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import migrateData from "./data.json";

// TEMPORARY one-time migration route. Uploads bundled base64 images to
// Vercel Blob, then should be deleted. Protected by the MIGRATE_SECRET
// env var (set in the Vercel dashboard, never committed to git) since
// this is meant to be removed right after a single use.
export async function GET(request: NextRequest) {
  const expected = process.env.MIGRATE_SECRET;
  const secret = request.nextUrl.searchParams.get("secret");
  if (!expected || secret !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const mapping: Record<string, string> = {};
  for (const [localPath, entry] of Object.entries(
    migrateData as Record<string, { blobPath: string; b64: string }>
  )) {
    const buffer = Buffer.from(entry.b64, "base64");
    const { url } = await put(entry.blobPath, buffer, {
      access: "public",
      addRandomSuffix: false,
    });
    mapping[localPath] = url;
  }

  return NextResponse.json(mapping);
}
