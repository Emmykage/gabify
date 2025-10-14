import Navbar from "@/components/nav/Navbar";
import PageTitle from "@/components/pageTitle/PageTitle";
import React from "react";

const BlogDetails = () => {
  return (
    <>
      <Navbar />
      <PageTitle
        link={"blog"}
        title={"Blog"}
        subtitle={" Missioners in Charge"}
      />

      <section className="bg-theme-bg min-h-screen py-12 px-6 md:px-12">
        {/* Hero Banner */}
        <div className="max-w-6xl mx-auto mb-12">
          <img
            src="/images/blog1.jpg"
            alt="Missioners in Charge"
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        <div className="max-w-6xl p-6 rounded-lg shadow bg-white mx-auto grid md:grid-cols-3 gap-12">
          {/* Article Section */}
          <article className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Missioners in Charge
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <p>🗓️ 23rd of April, 2025</p>
              <p>❤️ 2 Likes</p>
              <p>💬 4 Comments</p>
            </div>

            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>

              <p>
                Our missioners lead community-driven initiatives to promote
                inclusivity through sports. By providing mentorship, resources,
                and training, they empower individuals with disabilities to
                actively participate in athletics and personal development.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
                “Sports should be a bridge, not a barrier. Every athlete
                deserves a chance to shine.”
              </blockquote>

              <p>
                Through teamwork, resilience, and compassion, we aim to redefine
                what’s possible. Our programs have reached dozens of
                communities, transforming not only the lives of participants but
                also their families and supporters.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["Inclusion", "Sports", "Community", "Empowerment"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-alt font-semibold text-primary text-sm  rounded-full"
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
                {[
                  "Celebrating the Adoption",
                  "Charity for Everyone",
                  "Inclusive Games 2025",
                ].map((post) => (
                  <li
                    key={post}
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    {post}
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
                  className="bg-blue-600 flex-1 text-white px-4 rounded-r-lg hover:bg-blue-700"
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
