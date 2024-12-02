"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const BlogPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogs = [
    {
      title: "Exploring Next.js 13",
      description: "An in-depth look at Next.js 13 and its powerful features for modern web development. This is a longer description that contains more than 100 words to demonstrate the truncation functionality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      slug: "exploring-nextjs-13",
      date: "2024-11-06",
      author: "Jane Doe",
      image: "/blog1.webp",
    },
    {
      title: "The Future of Web Development",
      description: "Discover trends that are shaping the future of web development.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor semper erat, viverra aliquet orci laoreet eget. Suspendisse et convallis ante. In felis ligula, fringilla pulvinar sapien sed, varius viverra est. Aenean dictum ornare mauris sit amet porttitor. Sed et erat gravida, porttitor mauris vitae, porttitor nulla.",
      slug: "future-of-web-development",
      date: "2024-10-25",
      author: "John Smith",
      image: "/blog2.avif",
    },
    {
      title: "Mastering Responsive Design",
      description: "Tips and techniques for creating responsive web designs that look great on all devices.Vivamus efficitur gravida lorem sed hendrerit. Maecenas id consectetur dui. Vestibulum ornare egestas justo. Praesent euismod magna mauris, sit amet aliquet turpis scelerisque sagittis. Fusce turpis velit, rhoncus et bibendum quis, pulvinar sit amet dui. Nunc aliquet ante in elit efficitur dapibus.",
      slug: "mastering-responsive-design",
      date: "2024-09-12",
      author: "Alice Johnson",
      image: "/blog3.jpg",
    },
  ];

  const truncateText = (text, wordCount) => {
    const words = text.split(" ");
    return words.length > wordCount ? words.slice(0, wordCount).join(" ") + " ..." : text;
  };

  const handleAuthAction = (action) => {
    if (!session) {
      router.push("/signin");
      return;
    }
    console.log(`${action} clicked`); 
  };

  const toggleExpanded = (slug) => {
    setExpandedBlog(expandedBlog === slug ? null : slug);
  };

  return (
    <div className="container mx-auto py-16 px-4 mt-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Latest Blogs</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.slug} className="block rounded-lg overflow-hidden shadow-lg group">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mb-4">
                {expandedBlog === blog.slug
                  ? truncateText(blog.description, 100)
                  : truncateText(blog.description, 10)}
              </p>
              <button onClick={() => toggleExpanded(blog.slug)} className="text-blue-500 hover:underline">
                {expandedBlog === blog.slug ? "Show Less" : "Read More"}
              </button>

              <div className="flex gap-4 mt-5">
                <Link href={`/blog/${blog.slug}`}> {/* Fixed Link URL */}
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Full Post
                  </button>
                </Link>
                {session && (
                  <>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                      Like
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                      Comment
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
