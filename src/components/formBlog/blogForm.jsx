"use client";
import { useState } from "react";
import "trix";
import "trix/dist/trix.css";
export default function BlogForm({ onSubmit, defaultValues = {} }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(previews).then((images) => {
      setImagePreviews(images);
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        onSubmit(formData);
      }}
      className="space-y-6"
    >
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          name="title"
          defaultValue={defaultValues.title}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Excerpt</label>
        <input
          name="excerpt"
          defaultValue={defaultValues.excerpt}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* <div>
        <label className="block font-semibold mb-1">Content</label>
        <textarea
          name="content"
          rows="6"
          defaultValue={defaultValues.content}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      <div>
        <label className="block font-semibold mb-1"> Content</label>
        <input id="trix" type="hidden" name="content" />
        <trix-editor input="trix" />
      </div>
      {/* <div>
        <label className="block font-semibold mb-1">Image URL</label>
        <input
          name="image"
          defaultValue={defaultValues.image}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div> */}

      <div className="my-1">
        <label className="block font-semibold mb-1">Image</label>
        <input
          onInput={handleImageChange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
          type="file"
          accept="image/*"
          name="image"
          id="image"
        />{" "}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
      >
        Save Post
      </button>
    </form>
  );
}
