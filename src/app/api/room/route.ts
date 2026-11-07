import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.search;
  try {
    const res = await fetch(`https://fightkaro.com/api/room${search}`, {
      method: "GET",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to contact room coordinator";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function POST(req: NextRequest) {
  const search = req.nextUrl.search;
  try {
    const body = await req.text();
    const res = await fetch(`https://fightkaro.com/api/room${search}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body,
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to contact room coordinator";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function DELETE(req: NextRequest) {
  const search = req.nextUrl.search;
  try {
    const res = await fetch(`https://fightkaro.com/api/room${search}`, {
      method: "DELETE",
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to contact room coordinator";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

