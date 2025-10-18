"use client";
import Sidebar from "@/components/sidebar/sidebar";
import Topbar from "@/components/topbar/topbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // avoids flicker before redirect
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-16 md:ml-56 flex-1 flex flex-col">
        <Topbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
}
