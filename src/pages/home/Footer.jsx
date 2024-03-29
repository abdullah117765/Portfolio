import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex mb-6 space-x-4 ">
          <a href="https://twitter.com/abdullah117765"  rel="noreferrer"  target="_blank" className="transition duration-300 ease-in-out hover:text-blue-500">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/mian-abdullah-6b2661221" rel="noreferrer"  target="_blank" className="transition duration-300 ease-in-out hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://github.com/abdullah117765"  target="_blank" rel="noreferrer" className="transition duration-300 ease-in-out hover:text-blue-500">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
        <div className="mb-6 text-center">
          <a href="contact" rel="noreferrer"className="text-lg font-semibold transition duration-300 ease-in-out hover:text-blue-500">
            <FontAwesomeIcon icon={faFileAlt} /> Terms of Service
          </a>
          <span className="mx-2">|</span>
          <a href="contact" className="text-lg font-semibold transition duration-300 ease-in-out hover:text-blue-500">
            <FontAwesomeIcon icon={faShieldAlt} /> Privacy Policy
          </a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Mian Abdullah. All rights reserved.
        </div>
        <div className="text-sm">
          Designed and built with ❤️ using React and Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
