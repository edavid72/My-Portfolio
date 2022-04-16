import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import tailwind from '../assets/tailwind-css.png';
import git from '../assets/git.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node-js.png';
import postgres from '../assets/postgres.png';
import linux from '../assets/linux-22621.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#2F333F] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#2FA4FF] ">
            Skills
          </p>
          <p className="py-4 text-lg lg:text-xl">
            {' '}
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* HTML */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>

          {/* CSS */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>

          {/* Tailwind CSS */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>

          {/* SASS */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sass} alt="Sass icon" />
            <p className="my-4">SASS</p>
          </div>

          {/* Javascript */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>

          {/* React */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p className="my-4">React</p>
          </div>

          {/* Git */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={git} alt="Git icon" />
            <p className="my-4">Git</p>
          </div>

          {/* Node JS */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="Node.js icon" />
            <p className="my-4">Node JS</p>
          </div>

          {/* PostgreSQL */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={postgres}
              alt="Postgresql icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>

          {/* Linux distributions */}
          <div className="shadow-md shadow-[#2F333F] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={linux} alt="Linux icon" />
            <p className="my-4">GNU Linux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
