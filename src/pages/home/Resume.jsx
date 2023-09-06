import React from 'react';

const EducationCard = ({ year, degree, institution, description }) => {
  return (
    <div className="p-6 mb-8 transition-transform duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105">
      <h3 className="mb-2 text-lg font-semibold">{year}</h3>
      <p className="text-gray-400">{degree}</p>
      <p className="text-gray-400">{institution}</p>
      <p className="mt-4 text-gray-300">{description}</p>
    </div>
  );
};

const ExperienceCard = ({ year, position, company, description }) => {
  return (
    <div className="p-6 mb-8 transition-transform duration-300 transform bg-gray-900 rounded-lg shadow-lg hover:scale-105">
      <h3 className="mb-2 text-lg font-semibold">{year}</h3>
      <p className="text-gray-400">{position}</p>
      <p className="text-gray-400">{company}</p>
      <p className="mt-4 text-gray-300">{description}</p>
    </div>
  );
};

const SkillBadge = ({ title }) => {
  return (
    <span className="px-3 py-1 mb-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded-full">
      {title}
    </span>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="py-16 text-white bg-gray-800">
      <div className="container mx-auto">
        <h2 className="mb-12 text-4xl font-semibold text-center">Resume</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Education */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">My Education</h3>
            <EducationCard
              year="2000 - 2004"
              degree="Computer Science"
              institution="International University"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <EducationCard
              year="2005 - 2008"
              degree="Bachelor Degree"
              institution="University of California"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <EducationCard
              year="2009 - 2012"
              degree="Master Degree"
              institution="Harvard University"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
          </div>

          {/* Right Column - Work Experience */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">My Experience</h3>
            <ExperienceCard
              year="2012 - 2013"
              position="Jr. UI UX Designer"
              company="Themeforest"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ExperienceCard
              year="2014 - 2016"
              position="Jr. Product Designer"
              company="Dribbble"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ExperienceCard
              year="2017 - 2019"
              position="Product Designer"
              company="Adobe"
              description="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h3 className="mb-4 text-xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap">
            <SkillBadge title="Web Design" />
            <SkillBadge title="HTML/CSS" />
            <SkillBadge title="JavaScript" />
            <SkillBadge title="React JS" />
            <SkillBadge title="Angular JS" />
            <SkillBadge title="Bootstrap" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
