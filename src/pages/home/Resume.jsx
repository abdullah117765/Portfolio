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
    <section id="resume" className="py-16 text-white bg-slate-800">
      <div className="container mx-auto">
        <h2 className="mb-12 text-5xl font-semibold text-center">Resume</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Education */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">My Education</h3>
            <EducationCard
              year="2016 - 2018"
              degree="Matric"
              institution="Fauji Foundation College Rawalpindi"
              description="Learning the basics of Mathematics, Physics, Chemistry "
            />
            <EducationCard
              year="2018 - 2020"
              degree="FSC "
              institution="Fauji Foundation College Rawalpindi"
              description="Deep diving into the world of Mathematics, Physics, Chemistry."
            />
            <EducationCard
              year="2020 - 2024"
              degree="Bs Software Engineering "
              institution="Fast Nuces Islamabad"
              description="Embarking on a journey of learning web, application, and cloud development to craft scalable and innovative digital solutions."
            />
          </div>

          {/* Right Column - Work Experience */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">My Experience</h3>
           
            
             <ExperienceCard
              year="2022 - 2022"
              position="Android Development"
              company="Netwest Technology"
              description="In this short Internship i explored the world of Android development using Android Studio."
            />
            <ExperienceCard
              year="2023 - 2023"
              position="Web Developer"
              company="Mern STack"
              description="In this Internship i explored the world of Web development gaining experinece in Mern Stack ."
            />
            <ExperienceCard
              year="2022 - current"
              position="Freelancer "
              company="Upwork/Fiver"
              description="I am a freelance web developer crafting custom web applications to meet clients' unique needs and aspirations."
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h3 className="mb-4 text-xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap">
            <SkillBadge title="Mongo Db" />
            <SkillBadge title="HTML/CSS" />
            <SkillBadge title="JavaScript" />
            <SkillBadge title="React JS" />
            <SkillBadge title="Type Script" />
            <SkillBadge title="Tailwind Css" />
            <SkillBadge title="Sql Databases" />
            <SkillBadge title="Docker" />
            <SkillBadge title="Github" />
            <SkillBadge title="Ci/cd Pipeline" />
            <SkillBadge title="Java" />
            <SkillBadge title="C#" />
            <SkillBadge title="AWs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
