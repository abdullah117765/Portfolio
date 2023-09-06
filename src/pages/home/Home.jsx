import React, { useState, useEffect, useCallback} from "react";
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

const Portfolio = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const greetingText = "Hello, I'm Abdullah";
  const typingSpeed = 150; // Adjust typing speed (milliseconds per character)

  const resetTypewriter = useCallback(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < greetingText.length) {
        setTypewriterText(greetingText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTypewriterText("");
          resetTypewriter();
        }, 3000); // Delay before restarting the animation (2 seconds in this example)
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    resetTypewriter();
  }, [resetTypewriter]);

  return (
    <div className="min-h-screen pt-48 text-white bg-black">     
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center p-8 lg:flex-row lg:p-16">
        <div className="text-center lg:w-1/2 lg:text-left lg:mx-16">
          <div className="mb-16 font-bold text-7xl">{typewriterText}</div>
          <div className="mb-6 text-4xl animate__animated animate__fadeIn animate__delay-2s" >
            Web Developer
          </div>
          <p className="max-w-xl mx-auto mb-8 text-lg animate__animated animate__fadeIn animate__delay-3s">
            Welcome to my portfolio website. I'm passionate about creating web applications and solving problems with code. Feel free to explore my work and connect with me on social media.
          </p>
          <div className="mt-4 space-x-4 lg:mt-8 animate__animated animate__fadeIn animate__delay-4s">
            <a
              href="your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="your-facebook-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="your-twitter-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="text-center lg:w-1/2">
          <img
            src={profilepic}
            alt="Abdulla's Profile"
            className="mx-auto border-4 border-white rounded-full w-72 h-72 animate__animated animate__fadeIn animate__delay-2s lg:mx-0"
          />
        </div>
      </section>
      

      {/* know me more Section */}
      
        <KnowMeMore/>
      
        <WhatIDo/>

        <Resume/>
        <Contact/>
      <Footer/>
      
    </div>
  );
};

export default Portfolio;
