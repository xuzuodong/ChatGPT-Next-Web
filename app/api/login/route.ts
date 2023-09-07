import { NextRequest, NextResponse } from "next/server";

const OPENAI_URL = "api.openai.com";
const DEFAULT_PROTOCOL = "https";
const PROTOCOL = process.env.PROTOCOL || DEFAULT_PROTOCOL;
const BASE_URL = process.env.BASE_URL || OPENAI_URL;

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  let baseUrl = BASE_URL;

  if (!baseUrl.startsWith("http")) {
    baseUrl = `${PROTOCOL}://${baseUrl}`;
  }

  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }

  console.log("[Base Url]", baseUrl);

  const fetchUrl = `${baseUrl}/open-api/v1/login`;

  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  const res = await fetch(fetchUrl, {
    headers,
    method: "POST",
    body: JSON.stringify({
      name: reqBody.name,
      password: reqBody.password,
    }),
  });

  // to prevent browser prompt for credentials
  const newHeaders = new Headers(res.headers);
  newHeaders.delete("www-authenticate");
  // to disable nginx buffering
  newHeaders.set("X-Accel-Buffering", "no");

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: newHeaders,
  });
}
