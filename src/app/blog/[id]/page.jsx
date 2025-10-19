"use client";
import Navbar from "@/components/nav/Navbar";
import PageTitle from "@/components/pageTitle/PageTitle";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/posts/${id}`);
        const { data } = await response.json();
        console.log(data);
        setPost(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/posts`);
        const { data } = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  console.log(posts);

  return (
    <>
      <Navbar />
      <PageTitle link={"blog"} title={"Blog"} subtitle={post?.title} />

      <section className="bg-theme-bg min-h-screen py-12 px-6 md:px-12">
        {/* Hero Banner */}
        <div className="max-w-6xl mx-auto mb-12">
          <img
            src={post?.image}
            alt="Missioners in Charge"
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="max-w-6xl p-6 rounded-lg shadow bg-white mx-auto grid md:grid-cols-3 gap-12">
          {/* Article Section */}
          <article className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post?.title}{" "}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <p>🗓️ {post?.title ?? "23rd of April, 2025"}</p>
              <p>❤️ {post?.like ?? "2 Likes"}</p>
              <p>💬 {post?.comments ?? "4 Comments"}</p>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              {/* */}

              {post?.content}
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Inclusion", "Sports", "Community", "Empowerment"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-theme-bg font-semibold text-primary text-sm  rounded-full"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* About Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                About Us
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to integrating individuals with disabilities
                into the world of sports — nurturing confidence, teamwork, and
                equality.
              </p>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {posts.slice(0, 2)?.map((post) => (
                  <li
                    onClick={() => router.push(`/blog/${post.id}`)}
                    key={post.id}
                    className="text-alt -600 hover:underline cursor-pointer"
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Subscribe to our newsletter for stories and upcoming events.
              </p>
              <form className="flex py-1.5">
                <input
                  type="email"
                  placeholder="Your email"
                  className="f w-full px-3 py-2 border rounded-l-lg outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-alt -600 flex-1 text-white px-4 rounded-r-lg hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
