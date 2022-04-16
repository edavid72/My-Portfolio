import React from 'react';
import coingeass from '../assets/coin-geass.png';
import drinkseeker from '../assets/drink-seeker.png';
import rocktshirt from '../assets/rock-tshirt.png';
import crudreact from '../assets/crud-react.png';
import budgetapp from '../assets/budget-app.png';
import countryfinder from '../assets/country-finder.png';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiJavascript, SiReact } from 'react-icons/si';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#2F333F]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#2FA4FF]">
            Work
          </p>
          <p className="py-6 text-lg lg:text-xl">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          {/* Project #1 */}
          <div
            style={{ backgroundImage: `url(${coingeass})` }}
            className="shadow-lg shadow-[#040c16] group container border-4 border-[#00aea3] rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <h3 className="text-xl text-center font-bold text-white tracking-wider">
                Coin Geass
              </h3>

              <div className="flex justify-around text-3xl p-2">
                <AiFillHtml5 />
                <DiCss3 />
                <SiTailwindcss />
                <SiJavascript />
                <SiReact />
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://coin-geass.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-700 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/edavid72/coin-geass"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white hover:bg-white hover:text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End--> Project #1 */}

          {/* Project #2 */}
          <div
            style={{ backgroundImage: `url(${drinkseeker})` }}
            className="shadow-lg shadow-[#040c16] group container border-4 border-[#f8f5f1] rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <h3 className="text-xl text-center font-bold text-white tracking-wider">
                Drink Seeker
              </h3>

              <div className="flex justify-around text-3xl p-2">
                <AiFillHtml5 />
                <DiCss3 />
                <SiTailwindcss />
                <SiJavascript />
                <SiReact />
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://drink-seeker.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-700 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/edavid72/Drink_Seeker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white hover:bg-white hover:text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End--> Project #2 */}

          {/* Project #3 */}
          <div
            style={{ backgroundImage: `url(${rocktshirt})` }}
            className="shadow-lg shadow-[#040c16] group container border-4 border-[#323b59] rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <h3 className="text-xl text-center font-bold text-white tracking-wider">
                Rock T-Shirt
              </h3>

              <div className="flex justify-around text-3xl p-2">
                <AiFillHtml5 />
                <DiCss3 />
                <SiTailwindcss />
                <SiJavascript />
                <SiReact />
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://ecommerce-rock-tshirt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-700 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/edavid72/ecommerce_rockTshirt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white hover:bg-white hover:text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End--> Project #3 */}

          {/* Project #4 */}
          <div
            style={{ backgroundImage: `url(${budgetapp})` }}
            className="shadow-lg shadow-[#040c16] group container border-4 border-[#d0e5ee] rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <h3 className="text-xl text-center font-bold text-white tracking-wider">
                Budget App
              </h3>

              <div className="flex justify-around text-3xl p-2">
                <AiFillHtml5 />
                <DiCss3 />
                <SiTailwindcss />
                <SiJavascript />
                <SiReact />
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://budget-app-silk.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-700 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/edavid72/budgetApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white hover:bg-white hover:text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End--> Project #4 */}

          {/* Project #5 */}
          <div
            style={{ backgroundImage: `url(${countryfinder})` }}
            className="shadow-lg shadow-[#040c16] group container border-4 border-[#393c46] rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <h3 className="text-xl text-center font-bold text-white tracking-wider">
                Country Finder
              </h3>

              <div className="flex justify-around text-3xl p-2">
                <AiFillHtml5 />
                <DiCss3 />
                <SiTailwindcss />
                <SiJavascript />
                <SiReact />
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://country-finder-khaki.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-700 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/edavid72/country-finder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white hover:bg-white hover:text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End--> Project #5 */}

          {/* Project #6 */}
          <div
            style={{ backgroundImage: `url(${crudreact})` }}
            className="shadow-lg shadow-[#040c16] group container border-4 border-[#00afa5] rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <h3 className="text-xl text-center font-bold text-white tracking-wider">
                CRUD List
              </h3>

              <div className="flex justify-around text-3xl p-2">
                <AiFillHtml5 />
                <DiCss3 />
                <SiTailwindcss />
                <SiJavascript />
                <SiReact />
              </div>

              <div className="pt-8 text-center">
                <a
                  href="https://crud-react-tawny.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-gray-700 hover:text-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/edavid72/CRUD_react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-gray-700 text-white hover:bg-white hover:text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End--> Project #6 */}
        </div>
      </div>
    </div>
  );
};

export default Work;
