import BlogForm from "@/components/formBlog/blogForm";
import Sidebar from "@/components/sidebar/sidebar";
import Topbar from "@/components/topbar/topbar";
import { useParams } from "next/navigation";

export default function EditPost() {
  const { id } = useParams();
  const post = {
    title: "Example Post",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://source.unsplash.com/random/800x600?nature",
  };

  const handleSubmit = (data) => {
    console.log("Updated post:", id, data);
    alert("✅ Post Updated Successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-16 md:ml-56 flex-1">
        <Topbar />
        <div className="p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Edit Post</h2>
          <BlogForm defaultValues={post} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
