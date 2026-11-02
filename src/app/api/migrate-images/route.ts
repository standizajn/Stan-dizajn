import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.MIGRATE_SECRET || secret !== process.env.MIGRATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results: Record<string, string> = {};

  for (const [key, base64] of Object.entries(data as Record<string, string>)) {
    const buffer = Buffer.from(base64, "base64");
    const blob = await put(key, buffer, {
      access: "public",
      contentType: "image/webp",
      addRandomSuffix: false,
    });
    results[key] = blob.url;
  }

  return NextResponse.json({ results });
}
