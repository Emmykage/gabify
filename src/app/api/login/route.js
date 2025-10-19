import { users } from "@/mockData/usersData";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  // Example: mock auth
  if (user) {
    return NextResponse.json(
      { token: user.token, role: "admin" },
      {
        status: 200,
      }
    );
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    {
      status: 401,
    }
  );
}
