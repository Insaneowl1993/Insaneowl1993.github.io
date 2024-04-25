import React from "react";

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Dale, nice to meet you. Please take look around.</p>
            </div>
            <div>
              <p>
              As an entry-level full-stack web developer, I bring a strong foundation in HTML, CSS, JavaScript, and React, dedicated to building responsive and visually appealing interfaces.
               My back-end proficiency lies in Node.js and Express, complemented by experience in managing MongoDB databases. 
               Eager to learn and adapt, I continuously seek to enhance my skills and apply them in a dynamic team environment.
               My goal is to contribute effectively to projects while growing my expertise in web development.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
