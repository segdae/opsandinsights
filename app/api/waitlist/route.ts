import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = (await request.json()) as {
      email?: string;
      source?: string;
      product?: string;
    };

    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 },
      );
    }

    const source = body.source ?? "waitlist";
    const product = body.product ?? null;

    const { error } = await supabase.from("email_captures").insert({
      email,
      source,
      product,
    });

    // 23505 = unique_violation — email already captured, treat as success
    if (error && error.code !== "23505") {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 },
    );
  }
}
