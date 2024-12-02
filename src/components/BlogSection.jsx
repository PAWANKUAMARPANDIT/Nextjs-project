"use client";
import Image from "next/image";
import { useState } from "react";

const BlogCard = ({ title, date, category, excerpt, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="lg:w-1/3 md:w-1/2 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            src={imageUrl}
            alt={title}
            width={400}  
           height={300}
          />
          <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-6 bg-white">
          <h2 className="text-xs font-medium text-gray-400 mb-1">{date}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3 text-gray-600">
            {isExpanded ? excerpt + "more details on the topic." : `${excerpt.split(" ").slice(0, 10).join(" ")}...`}
          </p>
          <div className="flex items-center">
            <button
              onClick={handleReadMore}
              className="text-teal-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-teal-600 transition-colors duration-300"
            >
              {isExpanded ? "Show Less" : "Read More"}
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      date: "June 1, 2024",
      category: "Technology",
      excerpt: "Explore the latest trends and innovations shaping the future of web development.",
      imageUrl: "/webdev.jpg",
    },
    {
      title: "Mastering React Performance",
      date: "June 5, 2024",
      category: "Development",
      excerpt: "Learn advanced techniques to optimize your React applications.",
      imageUrl: "/reactlogo.png",
    },
    {
      title: "UI/UX Best Practices",
      date: "June 10, 2024",
      category: "Design",
      excerpt: "Discover the essential principles of creating user-friendly interfaces.",
      imageUrl: "/uiux.jpg",
    },
  ];

  return (
    <section className="text-gray-600 body-font py-24 bg-gray-50">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">
            OUR BLOG
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Latest Articles & Resources
          </h1>
          <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex mx-auto mt-6"></div>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
