import React from "react";

const CareerCard = ({ title, department, location, type }) => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
          {department}
        </span>
        <span className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
          {location}
        </span>
        <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full">
          {type}
        </span>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
        Apply Now
      </button>
    </div>
);

const Careers = () => {
    const openings = [
      { title: "Senior Frontend Developer", department: "Engineering", location: "Remote", type: "Full-time" },
      { title: "UX Designer", department: "Design", location: "New York", type: "Full-time" },
      { title: "Product Manager", department: "Product", location: "San Francisco", type: "Full-time" },
    ];

    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
            Help us build the future of technology. We're looking for passionate individuals 
            who want to make a difference.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {openings.map((opening, index) => (
            <CareerCard key={index} {...opening} />
          ))}
        </div>
      </div>
    );
};

export default Careers;
