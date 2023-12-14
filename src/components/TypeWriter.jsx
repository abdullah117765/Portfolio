import React, { useEffect, useState } from 'react';

const TypewriterComponent = () => {
  const strings = [
    'Software Developer',
    'Freelancer',
    'MERN Stack Developer',
    'Cloud Native Developer',
  ];
  const [currentString, setCurrentString] = useState('');
 

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typewriterTimeout;

    const type = () => {
      const fullText = strings[currentIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setCurrentString(currentText);

      let typingSpeed = 120;

      if (isDeleting) {
        typingSpeed /= 2; // Speed up deletion
      }

      if (!isDeleting && currentText === fullText) {
        typingSpeed = 1000; // Pause after typing
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % strings.length; // Move to the next string
      }

      typewriterTimeout = setTimeout(type, typingSpeed);
    };

    typewriterTimeout = setTimeout(type, 1000);

    return () => {
      clearTimeout(typewriterTimeout);
    };
  }, []);

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl">{currentString}</h1>
    </div>
  );
};

export default TypewriterComponent;
//ddd