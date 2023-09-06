// src/components/KnowMeMore.js
import React from 'react';

const KnowMeMore = () => {
  return (
    <section className="py-32 text-white mt-80 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-32 text-4xl font-bold">Know Me More</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="text-left">
            <p className="mb-4 text-2xl font-semibold">I'm Mian Abdullah, a Web Developer</p>
            <p className="mb-6 text-lg">
              I help you build a brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. When an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-lg">
              Delivering work within time and budget which meets client’s requirements is our motto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
            </p>
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
              <button className="px-4 py-2 mt-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Download CV</button>
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
                  <p className="text-2xl font-semibold">2</p>
                  <p className="text-lg">Got Awards</p>
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
