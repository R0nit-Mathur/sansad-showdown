import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://fightkaro.com/api/ice", {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
  } catch {
    // Fallback STUN servers
  }
  return NextResponse.json({
    iceServers: [
      { urls: ["stun:stun.cloudflare.com:3478", "stun:stun.l.google.com:19302"] }
    ],
    relay: false
  });
}

