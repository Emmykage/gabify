import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
      <img
        src={post.image}
        alt={post.title}
        className="rounded-xl h-48 w-full object-cover"
      />
      <h3 className="text-lg font-semibold mt-3">{post.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-400 text-xs">{post.date}</span>
        <Link
          href={`/admin/edit/${post.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
