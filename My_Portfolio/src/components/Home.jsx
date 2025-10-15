import React from "react";
import pic from "../assets/profile.jpg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl mx-auto px-4 md:px-20 my-28"
      >
        <div className="w-full  mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl py-10 px-4 md:px-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
              <span className="text-xl text-gray-300 font-light">Welcome In My Feed</span>
              <div className="flex flex-wrap items-center space-x-1 text-2xl md:text-4xl font-semibold">
                <h1 className="text-gray-100">Hello, I'm a</h1>
                <ReactTyped
                  className="text-teal-400 font-extrabold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </div>
              <p className="text-justify text-md md:text-lg text-gray-300 leading-relaxed shadow-lg p-4 rounded-lg bg-gray-800/80">
                Enthusiastic Software Developer with a strong foundation in full-stack web development, specializing in React.js, JavaScript, and Java. Proficient in building scalable, user-focused applications with seamless integration of frontend and backend technologies. Experienced in data-driven projects, including real-time GPS tracking systems and learning platforms, with a keen eye for optimization and performance tuning. Adept at leveraging cloud technologies like Azure for data analysis and visualization, coupled with a solid grasp of Data Structures and Algorithms.
              </p>
              {/* Social Media and Technologies */}
              <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                {/* Social Media */}
                <div className="space-y-2">
                  <h1 className="font-bold text-center text-gray-400">Available on</h1>
                  <ul className="flex space-x-5">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareFacebook className="text-3xl text-blue-500 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/upendra-chauhan-931748230/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-3xl text-blue-400 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoLogoYoutube className="text-3xl text-red-600 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://t.me/UpendraChauhan_21bcs6885"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTelegram className="text-3xl text-teal-400 hover:scale-110 transition-transform duration-200 cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Technologies */}
                <div className="space-y-2">
                  <h1 className="font-bold text-center text-gray-400">Currently working on</h1>
                  <div className="flex space-x-5">
                    <SiMongodb className="text-3xl text-green-400 hover:text-green-300 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-green-900 p-1 cursor-pointer bg-gray-900" />
                    <SiExpress className="text-3xl text-gray-300 hover:text-white hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-gray-700 p-1 cursor-pointer bg-gray-900" />
                    <FaReact className="text-3xl text-blue-400 hover:text-blue-300 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-blue-900 p-1 cursor-pointer bg-gray-900" />
                    <FaNodeJs className="text-3xl text-green-300 hover:text-green-200 hover:scale-110 transition-transform duration-200 rounded-full border-[2px] border-green-900 p-1 cursor-pointer bg-gray-900" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="md:w-1/2 md:ml-16 md:mt-20 mt-8 order-1 flex justify-center">
              <div className="relative group w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border-9 border-transparent group-hover:animate-spin-border bg-gradient-to-tr from-teal-500 via-purple-700 to-blue-600 group-hover:border-teal-400 transition-all duration-1000 z-0"></span>
                <img
                  src={pic}
                  className="rounded-full w-[280px] h-[280px] md:w-[420px] md:h-[420px] shadow-xl relative z-10 bg-gray-900/80 backdrop-blur-lg border-1 border-gray-700"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-700 my-10" />
    </>
  );
}

export default Home;
