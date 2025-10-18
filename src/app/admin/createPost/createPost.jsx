import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import BlogForm from "../components/BlogForm";

export default function CreatePost() {
  const handleSubmit = (data) => {
    console.log("Create new post:", data);
    alert("✅ Post Created Successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-16 md:ml-56 flex-1">
        <Topbar />
        <div className="p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Create New Post</h2>
          <BlogForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
