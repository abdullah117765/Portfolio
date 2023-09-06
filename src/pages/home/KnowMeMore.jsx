// src/components/KnowMeMore.js
import React from 'react';
import CV from "../../resources/Cv4.pdf";
const KnowMeMore = () => {
  return (
    <section id="about" className="py-32 text-white bg-gray-900 mt-80">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-32 text-4xl font-bold">Know Me More</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="text-left">
            <p className="mb-4 text-2xl font-semibold">I'm Mian Abdullah, a Web Developer</p>
            <p className="mb-6 text-lg">
            A seasoned web developer with expertise in the MERN stack, Docker, CI/CD pipeline management, and API integration. Proficient in creating robust and dynamic web applications using MongoDB, Express, React, and Node.js. Skilled in containerization with Docker for efficient deployment and scaling.
            </p>
            <p className="text-lg">
            Experienced in setting up and optimizing CI/CD pipelines for seamless software delivery. Adept at seamlessly integrating third-party APIs to enhance application functionality, ensuring a smooth and feature-rich user experience.</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <ul className="text-lg">
                <li className="mb-2">
                  <span className="font-semibold">Name:</span> Mian Abdullah
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Email:</span> axiomshah@gmail.com
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Age:</span> 22
                </li>
                <li className="mb-2">
                  <span className="font-semibold">From:</span> Rawalpindi, Pakistan
                </li>
              </ul>
              <a
  href={CV}  // Replace with the actual path to your CV file
  download="Cv4.pdf"      // Specify the filename for the downloaded file
>
  <button className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
    Download CV
  </button>
</a>

            </div>
            <div className="mt-10">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-semibold">2+</p>
                  <p className="text-lg">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold">10+</p>
                  <p className="text-lg">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold">10+</p>
                  <p className="text-lg">Projects Done</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-semibold">3</p>
                  <p className="text-lg">Got Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowMeMore;
