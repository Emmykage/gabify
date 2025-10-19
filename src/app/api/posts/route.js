// let posts = [
//   { id: 1, title: 'Hello Next.js', content: 'Your first post.' },
// ]

import Post from "@/models/Post";
import { NextResponse } from "next/server";
import { posts } from "@/mockData/postData";

// export async function GET() {
//   return Response.json(posts);
// }

// export async function POST(request) {
//   const newPost = await request.json()
//   newPost.id = posts.length + 1
//   posts.push(newPost)
//   return Response.json(newPost, { status: 201 })
// }

export async function GET(request) {
  console.log("first");
  try {
    // await connectToDatabase();

    // ✅ Optional: get query params (e.g., ?limit=10)
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit")) || 0;
    const search = searchParams.get("search") || "";

    // ✅ Optional: basic filtering or search
    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    // ✅ Fetch posts (sorted by newest first)
    // const posts = await Post.find(query).sort({ createdAt: -1 }).limit(limit);

    // ✅ Return posts
    return NextResponse.json(
      { success: true, count: posts.length, data: posts },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch posts.",
      },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    // ✅ Connect to the database
    await connectToDatabase();

    // ✅ Parse the incoming JSON body
    const data = await request.json();

    // ✅ Basic validation
    if (!data.title || !data.content) {
      return NextResponse.json(
        { success: false, message: "Title and content are required." },
        { status: 400 }
      );
    }

    // ✅ Create new post
    const post = await Post.create(data);

    // ✅ Return success response
    return NextResponse.json(
      { success: true, message: "Post created successfully", post },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error creating post:", error);

    // ✅ Return readable error message
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An error occurred while creating the post.",
      },
      { status: 500 }
    );
  }
}
