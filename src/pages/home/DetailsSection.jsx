import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCode,
  faMobileAlt,
  faChartPie,
  faSearch,
  faDesktop,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const WhatIDo = () => {
  const services = [
    {
      title: "Graphic Design",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: faPalette,
    },
    {
      title: "Web Design",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: faCode,
    },
    {
      title: "UI/UX Design",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: faDesktop,
    },
    {
      title: "App Design & Develop",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: faMobileAlt,
    },
    {
      title: "Business Analysis",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: faChartPie,
    },
    {
      title: "SEO Marketing",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      icon: faSearch,
    },
  ];

  return (
    <section className="bg-gray-100 py-36">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-center text-black">What I Do</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="mb-4 text-5xl text-blue-500"
                />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
