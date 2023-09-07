import React from 'react';

const Contact = () => {
  const email = 's.abdullah117765@gmail.com';
  const address = '31 Valley Road Westridge, Rawalpindi, Pakistan';
  const phoneNumber = '+92 (311) 057-9957';

  const composeEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="py-10 bg-gray-900 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-semibold text-white ">Contact Me</h2>
        <div className="md:flex md:space-x-8 text-left">
          {/* Contact Information */}
          <div className="md:flex md:flex-row md:w-1/2">
            <div className="mx-10 mb-4">
              <h3 className="text-xl font-semibold text-white">Address</h3>
              <p className="text-white">{address}</p>
            </div>
            <div className="mx-10 mb-4">
              <h3 className="text-xl font-semibold text-white">Phone:</h3>
              <p className="text-white">{phoneNumber}</p>
            </div>
            <div className="mx-10 mb-4">
              <h3 className="text-xl font-semibold text-white">Email:</h3>
              <p className="text-white">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </div>
          {/* Email Button */}
          <div className="md:w-1/2">
            <button
              onClick={composeEmail}
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Email Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
