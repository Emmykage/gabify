import Post from "@/models/Post";
import { NextResponse } from "next/server";
import { posts } from "@/mockData/postData";

export async function GET(request, { params }) {
  try {
    // ✅ Ensure database is connected
    // await connectToDatabase();

    const { id } = await params;

    // ✅ Validate id
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Post ID is required" },
        { status: 400 }
      );
    }

    // ✅ Fetch post
    const post = posts.find((post) => post.id == id);
    // const post = await Post.findById(id);

    // ✅ Handle not found
    if (!post) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 404 }
      );
    }

    // ✅ Return success response
    return NextResponse.json({ success: true, data: post }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch post.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_, { params }) {
  const { id } = params;
  const post = Post.deleteById(id);
  return NextResponse.json({ message: "Deleted" });
}
