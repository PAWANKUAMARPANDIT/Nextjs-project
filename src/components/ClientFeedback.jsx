"use client";
import { useState } from "react";
import Image from "next/image";

const FeedbackCard = ({ name, role, company, feedback, avatar }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-6 lg:w-1/3 md:w-1/2 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        bg-white rounded-2xl p-8 h-full
        transform transition-all duration-500
        ${isHovered ? "scale-105 shadow-2xl" : "shadow-lg"}
        border border-gray-100
        relative overflow-hidden
      `}
      >
        <div
          className={`
          absolute inset-0 opacity-10
          bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500
          transition-transform duration-1000
          ${isHovered ? "scale-110" : "scale-100"}
        `}
        />

        <div className="absolute -top-4 -left-4 text-teal-500 opacity-20 text-8xl font-serif">
          
        </div>

        <div className="relative z-10">
          <p className="text-gray-600 mb-6 leading-relaxed italic">
            `{feedback}`
          </p>

          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
              <Image src={avatar} alt={name} fill className="object-cover" />
            </div>

            <div>
              <h4 className="font-medium text-gray-900 transition-colors duration-300 hover:text-teal-500">
                {name}
              </h4>
              <div className="text-sm text-gray-500">
                {role} at <span className="text-teal-500">{company}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
          absolute bottom-0 left-0 h-1 
          bg-gradient-to-r from-teal-500 to-blue-500
          transition-all duration-300 ease-out
          ${isHovered ? "w-full" : "w-0"}
        `}
        />
      </div>
    </div>
  );
};

export const ClientFeedback = () => {
  const feedbacks = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      feedback:
        "The blog content has transformed our marketing strategy. The insights provided are invaluable and the engagement metrics have skyrocketed.",
      avatar: "/client.jpg",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateX",
      feedback:
        "Outstanding analysis and well-researched articles. The technical depth combined with clear explanations makes this blog a must-read.",
      avatar: "/human-2.jpg",
    },
    {
      name: "Emma Williams",
      role: "Product Manager",
      company: "DesignHub",
      feedback:
        "The UI/UX insights have directly influenced our product development. The practical tips and case studies are extremely valuable.",
      avatar: "/client3.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Readers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto" />
        </div>
        <div className="flex flex-wrap -m-6">
          {feedbacks.map((feedback, index) => (
            <FeedbackCard key={index} {...feedback} />
          ))}
        </div>
      </div>
    </section>
  );
};
