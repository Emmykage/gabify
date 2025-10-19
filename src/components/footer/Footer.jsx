"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/posts");
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
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <Link
            href="/"
            className="relative h-12 w-40 block mb-4 overflow-hidden rounded-md"
          >
            <Image
              fill
              src="/logo.PNG"
              alt="LOGO"
              className="object-contain bg-white rounded-md scale-150"
            />
          </Link>
          {/* <h2 className="text-white text-xl font-semibold mb-4">Gabify</h2> */}
          <p className="text-sm leading-relaxed text-gray-200">
            A world where disability is not a limitation but a unique strength —
            where every individual can discover their potential through sports.
            {/* We are committed to empowering individuals with disabilities through
            sports. By creating inclusive opportunities, we promote confidence,
            teamwork, and equal participation in every game.{" "} */}
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              12 Ave., New York
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              <a href="mailto:info@gabify.com">info@gabify.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />
              <a href="tel: 800 516 3290"> 800 516 3290</a>
            </li>
          </ul>
        </div>

        {/* Blog Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            From the Blog
          </h3>
          <ul className="space-y-4 text-sm">
            {posts?.map((post) => (
              <li key={post?.id}>
                <Link
                  href={`/blog/${post?.id}`}
                  className="font-medium block hover:text-primary transition-all ease-in duration-200 text-white"
                >
                  {post?.title}
                </Link>
                <span className="text-gray-400 text-xs">
                  {post?.createdAt ?? "23rd of April"} | {post?.comments ?? 0}{" "}
                  💬 {post?.likes ?? 0} ❤️
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Our Happy Faces
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-700 rounded-lg hover:opacity-80 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Gabify. All Rights Reserved.
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>Empowering Abilities Through Sports 💪</p>
      </div>
    </footer>
  );
};

export default Footer;

// const Footer = () => (
//   <footer className="bg-gray-800 text-gray-300 py-8 mt-16">

//   </footer>
// );

// export default Footer;
