import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import profilepic from "../../resources/me.jpeg";

import KnowMeMore from "./KnowMeMore";
import WhatIDo from "./DetailsSection";
import Resume from "./Resume";
import Contact from "./ContactInfo";
import Footer from "./Footer";
 import "animate.css/animate.min.css";
import TypewriterComponent from "../../components/TypeWriter";

const Portfolio = () => {

 
 
  return (
    <div className="overflow-hidden text-white bg-black " >
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col justify-center lg:flex-row lg:p-16 "
      >
        <div className="mt-10 text-center lg:w-1/2 lg:text-left lg:mx-60">
        <div className="">
          <h1 className="text-3xl ml-22 ">
            {" "}
            Hi There!{" "}
            <span className=" className="inline-flex items-center animate__animated animate__fadeIn animate__delay-1s
                role="img"
                aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h2 className="text-4xl ml-22 ">
            I'M <span className="text-purple-600">Mian Abdullah</span>{" "}
          </h2>
          <h1 className="h-16 mt-12 ml-62">
            <TypewriterComponent />
          </h1>
        </div>
          <p className="max-w-xl mx-auto mb-8 ml-0 text-lg animate__animated animate__fadeIn animate__delay-3s">
            Welcome to my portfolio website. I'm passionate about creating web applications and solving problems with code. Feel free to explore my work and connect with me on social media.
          </p>
          <div className="mt-4 space-x-4 lg:mt-8 animate__animated animate__fadeIn animate__delay-4s">
            <a
              href="https://www.linkedin.com/in/mian-abdullah-6b2661221"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/abdullah117765"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/donmas.mas.75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/abdullah117765"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div> 
        </div>
        <div className="w-full h-full text-center mt-16 lg:w-1/2">
          <img
            src={profilepic}
            alt="Abdulla's Profile"
            className="mx-auto border-4 border-white rounded-full  w-72 h-72 animate__animated animate__fadeIn animate__delay-2s lg:mx-0"
          />
        </div>
      </section>

      {/* know me more Section */}

      <KnowMeMore />

      <WhatIDo />

      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
