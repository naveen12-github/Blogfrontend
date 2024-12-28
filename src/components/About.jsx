import React from 'react';
import abs from '../images/abs.webp'

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Profile Image Section */}
          <div className="md:w-1/3 bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center p-6">
            <img
              src={abs}
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Hello, I'm <span className="text-purple-600">Naveen</span>
            </h1>
            <p className="mt-4 text-gray-600">
              Welcome to my blog! I'm a passionate developer and content creator who loves sharing knowledge and experiences through writing and coding. With expertise in modern web development technologies, I aim to inspire and empower others in their learning journey.
            </p>
            <p className="mt-4 text-gray-600">
              When I'm not coding or blogging, you'll find me exploring new technologies, reading books, or enjoying a cup of coffee while brainstorming innovative ideas.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="px-4 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="/blog"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition duration-300"
              >
                Read My Blogs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
