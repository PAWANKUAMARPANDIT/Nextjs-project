"use client";
import React, { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";

const SearchBar = ({ onSearchChange }) => (
  <div className="relative max-w-2xl mx-auto mb-12">
    <input
      type="text"
      placeholder="Search for help..."
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 
                 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:text-white"
    />
    <svg
      className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
);

const HelpCard = ({ title, description, extraContent, icon }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
      {showMore && (
        <div className="text-gray-600 dark:text-gray-400 mt-4 space-y-2">
          {extraContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      <button 
        onClick={toggleShowMore} 
        className="mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
      >
        {showMore ? "Show less" : "Learn more →"}
      </button>
    </div>
  );
};

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpTopics = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up running quickly.",
      extraContent: [
        "This is the first paragraph of extra content.",
        "This is the second paragraph, providing more details.",
        "This is the third paragraph with even more information."
      ],
      icon: <FiHelpCircle className="text-blue-500 h-6 w-6" />
    },
    // Add more help topics as needed
  ];

  const filteredTopics = helpTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How can we help?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Find the answers you need
        </p>
      </div>

      <SearchBar onSearchChange={setSearchQuery} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((topic, index) => (
          <HelpCard
            key={index}
            title={topic.title}
            description={topic.description}
            extraContent={topic.extraContent}
            icon={topic.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
