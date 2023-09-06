import React from 'react';

const Contact = () => {
  const email = 'axiomshah@gmail.com';
  const address = '31 Valley Road Westridge, Rawalpindi, Pakistan';
  const phoneNumber = '+92 (311) 057-9957';

  const composeEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-semibold text-gray-800">Contact Me</h2>
        <div className="md:flex md:space-x-8">
          {/* Contact Information */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Address:</h3>
              <p className="text-gray-600">{address}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Phone:</h3>
              <p className="text-gray-600">{phoneNumber}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Email:</h3>
              <p className="text-gray-600">
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>

            <div className="md:w-1/2">
            <button
              onClick={composeEmail}
              className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
               Email Me
            </button>
          </div>
          
          </div>
          {/* Email Button */}
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
