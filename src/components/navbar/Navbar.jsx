import React from 'react';
import CV from "../../resources/Cv.pdf";
const Navbar = () => {
  return (
    <nav className="py-4 bg-black">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Logo */}
        <div className="flex items-center text-3xl font-bold text-white font-heading">
          <span className="mr-2">🚀</span> {/* Add an emoji or an icon */}
          <div>
            <span className="text-lg text-blue-500">Mian Abdullah</span>
            <span className="block text-xs text-gray-400">Full stack Developer</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex mt-4 space-x-6 text-white md:mt-0">
          <li className="transition duration-300 ease-in-out hover:text-gray-400">
            <a href="#about" className='text-lg font-semibold'>About Me</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-gray-400">
            <a href="#whatido" className='text-lg font-semibold'>Experties</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-gray-400">
            <a href="#contact" className='text-lg font-semibold'>Contact</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-gray-400">
            <a href="#resume" className='text-lg font-semibold'>Education</a>
          </li>
          
        </ul>

        {/* Call to Action */}
        <div className="items-center hidden mt-4 space-x-4 md:flex md:mt-0">
          <a
            href="#contact"
            className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Hire Me
          </a>
          <a
           href={CV}  // Replace with the actual path to your CV file
  download="CV.pdf"
            className="px-4 py-2 text-white transition duration-300 ease-in-out border border-white rounded-full hover:bg-gray-800 hover:border-gray-800"
          >
           Download Cv
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
