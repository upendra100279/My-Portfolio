import React from "react";

import javascriptLogo from "../assets/javascript.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/CSS.png";
import reactLogo from "../assets/react.svg";
import nodeLogo from "../assets/node.png";
import mongodbLogo from "../assets/mongodb.jpg";
import reduxLogo from "../assets/Redux.svg";
import tailwindLogo from "../assets/Tailwind.png";
import expressLogo from "../assets/express.png";
import cuLogo from "../assets/cu.png";
import school from "../assets/school.png";

function About() {
  const skills = [
    { name: "JavaScript", logo: javascriptLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Redux", logo: reduxLogo },
    { name: "Tailwind", logo: tailwindLogo },
    { name: "Express", logo: expressLogo },
  ];

  return (
    <div name="About" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-teal-400 drop-shadow-lg">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 text-justify">
          Hello, I'm{" "}
          <span className="font-semibold text-teal-400">Upendra</span> an aspiring
          software developer with a strong foundation in Computer Science,
          currently pursuing a Bachelor’s degree at Chandigarh University (GPA:
          7.97/10). I specialize in C++, JavaScript, and Machine Learning, with
          a keen interest in full-stack development, data analytics, and
          computer vision. A dedicated learner and team player, I have
          experience leading impactful projects in real-time sentiment analysis,
          predictive analytics, and web development. I am passionate about
          building scalable solutions and leveraging emerging technologies to
          solve real-world problems. My portfolio includes leading a
          cross-functional team to develop COVID-19 prediction systems, building
          a sentiment analysis tool for social media data, and crafting
          responsive web applications. I thrive on innovation, continuous
          learning, and delivering high-quality solutions. Currently honing my
          problem-solving skills with over 400+ DSA problems solved on platforms
          like Leetcode and coding ninjas. a passionate Software Developer with
          a strong foundation in both frontend and backend technologies. I'm
          proficient in React.js, Node.js, Express.js, MongoDB, C++, Java, and
          Python. I specialize in building scalable web applications and
          crafting intuitive user experiences using modern frameworks like
          Next.js, Tailwind CSS, and TypeScript. From developing real-time GPS
          tracking systems to deploying full-stack e-commerce platforms, I enjoy
          solving complex problems and bringing innovative ideas to life. With
          experience in Agile teams and a deep interest in data structures,
          APIs, and system optimization, I aim to deliver robust and efficient
          solutions that make an impact. Let’s build something great together!
        </p>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-purple-400 mb-4 ">
            Education
          </h2>
          <div className="flex items-center space-x-4">
            <img
              src={cuLogo}
              alt="Chandigarh University"
              className="w-16 h-16 object-contain bg-gray-800 rounded-lg p-2"
            />
            <p className="text-gray-300 text-lg">
              B.Tech - Computer Science and Engineering, Chandigarh University,
              Punjab (2021 – 2025) - CGPA:{" "}
              <span className="font-semibold text-teal-400">7.95</span>
            </p>
          </div>

          <div className="flex items-center space-x-4 py-4">
            <img
              src={school}
              alt="Sunbeam School Mau"
              className="w-16 h-16 object-contain bg-gray-800 rounded-lg p-2"
            />
            <p className="text-gray-300 text-lg">
              Intermediate, Sunbeam School Mau, Uttar Pradesh (2018 – 2019) -
              Percentage:{" "}
              <span className="font-semibold text-teal-400">89</span>
            </p>
          </div>

          <div className="flex items-center space-x-4 py-4">
            <img
              src={school}
              alt="Sunbeam School Mau"
              className="w-16 h-16 object-contain bg-gray-800 rounded-lg p-2"
            />
            <p className="text-gray-300 text-lg">
              High School, Sunbeam School Mau, Uttar Pradesh (2016 – 2017) -
              CGPA: <span className="font-semibold text-teal-400">8.6</span>
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-purple-400 mb-4 ">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 bg-gray-800/80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
