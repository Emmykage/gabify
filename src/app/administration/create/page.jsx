"use client";

import BlogForm from "@/components/formBlog/blogForm";
import { set } from "mongoose";
import { useState } from "react";

export default function CreatePost() {
  // const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (formData) => {
    console.log(formData);
    setLoading(true);
    try {
      const response = await fetch("/api/posts", {
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

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Create New Post</h2>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
}
