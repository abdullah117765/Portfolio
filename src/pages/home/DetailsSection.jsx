import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faCode,
  faCodeCommit,
  faBug,
  faDesktop,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

const WhatIDo = () => {
  const services = [
    {
      title: "Cloud Developer",
      description:
        " I build scalable, and containerized applications cloud-native applications for optimal scalability and performance.",
      icon: faCloud,
    },
    {
      title: "Web Development",
      description:
        "I specialize in MERN stack web development, crafting robust and dynamic web applications with MongoDB, Express.js, React, and Node.js.",
      icon: faCode,
    },
    {
      title: "Ci/Cd Pipeline",
      description:
        "I design and implement CI/CD pipelines to automate and streamline project development, ensuring rapid and reliable software delivery.",
      icon: faCodeCommit,
    },
    {
      title: "Desktop Application",
      description:
        "I develop Java and C# desktop applications, delivering user-friendly and efficient software solutions for various platforms.",
      icon: faDesktop,
    },
    
    {
      title: "Software Rengineering",
      description:
        "I specialize in project analysis and engineering, revitalizing and optimizing projects for enhanced efficiency and performance.",
      icon: faDiagramProject,
    },
    {
      title: "Testing Software",
      description:
        "I conduct thorough testing of applications to ensure they meet quality standards and perform flawlessly.",
      icon: faBug,
    },
  ];

  return (
    <section id="whatido" className="bg-gray-700 py-36">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-white">
          What I Do
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition duration-300 ease-in-out transform rounded-lg shadow-lg bg-slate-800 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-center ">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="mb-4 text-5xl text-blue-500"
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
