import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-bold font-heading flex items-center">
          <span className="mr-2">🚀</span> {/* Add an emoji or an icon */}
          <div>
            <span className="text-lg text-blue-500">Syed Abdullah</span>
            <span className="block text-sm text-gray-400">Web Developer</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white mt-4 md:mt-0">
          <li className="hover:text-gray-400 transition duration-300 ease-in-out">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-gray-400 transition duration-300 ease-in-out">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-gray-400 transition duration-300 ease-in-out">
            <a href="#contact">Contact</a>
          </li>
          <li className="hover:text-gray-400 transition duration-300 ease-in-out">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-gray-400 transition duration-300 ease-in-out">
            <a href="#blog">Blog</a>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="#hire-me"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Hire Me
          </a>
          <a
            href="#resume"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-gray-800 hover:border-gray-800 transition duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
