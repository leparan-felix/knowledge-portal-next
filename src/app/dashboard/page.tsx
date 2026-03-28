"use client";

import { useEffect, useState } from "react";

// ✅ Define Post type
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // TEMP DATA (replace with API later)
    const tempPosts: Post[] = [
      {
        id: 1,
        title: "Getting Started with React",
        content: "Learn the basics of React including components and hooks.",
        author: "Felix",
      },
      {
        id: 2,
        title: "Next.js for Beginners",
        content: "Understand routing, SSR, and building modern apps.",
        author: "Admin",
      },
    ];
    setPosts(tempPosts);
  }, []);

  // Filter posts by search input
  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 py-10">
      {/* HEADER */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Dashboard
        </h1>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-3 bg-white border border-gray-200 rounded-xl 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm"
        />
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-gray-200 rounded-2xl p-6 
              shadow-sm hover:shadow-lg hover:-translate-y-1 
              transition-all duration-300 ease-in-out cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
              {post.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {post.content}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-400">{post.author}</span>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium
                  shadow-sm hover:shadow-md hover:bg-blue-700 
                  active:scale-95 transition-all duration-200"
              >
                Read
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center mt-16 text-gray-400">
          No articles found.
        </div>
      )}
    </div>
  );
}