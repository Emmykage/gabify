import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  // Example: mock auth
  if (email === "admin@example.com" && password === "password123") {
    return Response.json({ token: "abc123", role: "admin" });
  }

  return NextResponse(
    { error: "Invalid credentials" },
    {
      status: 401,
    }
  );
}
