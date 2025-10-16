"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router'
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-black/50 shadow-md fixed w-full z-50 py-1">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link href="/" className="h-16 w-60 relative block overflow-hidden">
            <Image
              fill
              src="/logo.PNG"
              alt="LOGO"
              className="object-contain scale-150 bg-white"
            />
          </Link>{" "}
        </h1>
        <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/programs" className="hover:text-blue-600">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/get-involved" className="hover:text-blue-600">
              Get Involved
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-600">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
