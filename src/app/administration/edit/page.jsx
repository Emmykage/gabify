"use client";
import BlogForm from "@/components/formBlog/blogForm";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function EditPost() {
  const { id } = useParams();
  // const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const { data } = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message ?? "Network response was not ok");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setError(error.message || "An error occurred");

      return;
    } finally {
      setLoading(false);
    }
  };

  const post = {
    title: "Example Post",
    content: "Lorem ipsum dolor sit amet...",
    image: "https://source.unsplash.com/random/800x600?nature",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Edit Post</h2>
      <BlogForm defaultValues={post} onSubmit={handleSubmit} />
    </div>
  );
}
