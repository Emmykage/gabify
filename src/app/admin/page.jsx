import BlogCard from "@/components/blogcard/blogCard";

const mockPosts = [
  {
    id: 1,
    title: "The Future of AI in 2025",
    excerpt: "AI is revolutionizing every industry, but what comes next?",
    date: "Oct 10, 2025",
    image: "https://source.unsplash.com/random/800x600?ai",
  },
  {
    id: 2,
    title: "Mastering React Performance",
    excerpt: "Simple techniques to make your React apps blazingly fast.",
    date: "Sep 25, 2025",
    image: "https://source.unsplash.com/random/800x600?code",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
