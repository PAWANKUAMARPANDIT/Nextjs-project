import Link from 'next/link';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1730343464315-a9ca01f9f1c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional headshot"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold dark:text-slate-100 text-gray-800 mb-4">About Us</h1>
          <p className="dark:text-slate-100 text-gray-600 leading-relaxed">
            With a passion for creating innovative web solutions, I specialize in
            building responsive and user-friendly applications that make a difference.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold dark:text-slate-100 text-gray-800 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-600 dark:text-slate-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          Experienced in building complete web applications using modern technologies
          including React, Node.js, and various databases. Committed to writing clean,
          maintainable code and creating exceptional user experiences.
        </p>
        {/* Using Link directly for external URL */}
        <Link
          href="https://x.com/PawanPa98011176"
          className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300"
          target="_blank" 
          rel="noopener noreferrer" 
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default About;
