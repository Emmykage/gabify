import Navbar from "@/components/nav/Navbar";
import PageTitle from "@/components/pageTitle/PageTitle";
import Link from "next/link";
import React from "react";

const posts = [
  {
    id: 1,
    title: "Missioners in Charge",
    date: "23rd of April",
    comments: 4,
    likes: 2,
    image: "/images/blog1.jpg",
    excerpt:
      "Meet the passionate leaders driving our mission forward — ensuring inclusion and equality through every sporting event.",
  },
  {
    id: 2,
    title: "Celebrating the Adoption",
    date: "5th of April",
    comments: 1,
    likes: 3,
    image: "/images/blog2.jpg",
    excerpt:
      "A heartwarming story of empowerment and belonging, celebrating the integration of more athletes into our programs.",
  },
  {
    id: 3,
    title: "Charity for Everyone",
    date: "25th of April",
    comments: 18,
    likes: 6,
    image: "/images/blog3.jpg",
    excerpt:
      "We believe sports should unite people — join us as we make athletic dreams possible for persons with disabilities.",
  },
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <PageTitle title="Blog" link={"blog"} />

      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From the Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover inspiring stories, updates, and events from our mission
              to integrate individuals with disabilities into sports.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {post.date} | ❤️ {post.likes} | 💬 {post.comments}
                  </p>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${2}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
