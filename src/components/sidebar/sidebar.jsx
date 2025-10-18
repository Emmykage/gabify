"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiHome, FiEdit3, FiPlusCircle } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { pathname } = usePathname();

  const links = [
    { path: "/", label: "Dashboard", icon: <FiHome /> },
    { path: "/create", label: "New Post", icon: <FiPlusCircle /> },
  ];

  return (
    <div
      className={`bg-gray-900 text-white h-screen fixed top-0 left-0 ${open ? "w-56" : "w-16"} transition-all duration-300 flex flex-col`}
    >
      <button className="p-4" onClick={() => setOpen(!open)}>
        <FiMenu size={22} />
      </button>
      <nav className="flex-1 space-y-4 mt-6">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 transition ${
              pathname === link.path ? "bg-gray-800" : ""
            }`}
          >
            {link.icon}
            {open && <span>{link.label}</span>}
          </Link>
        ))}

        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            router.push("/login");
          }}
          className="text-red-400 hover:text-red-600 mt-6"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
