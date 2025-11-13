import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import oracle from "../assets/oracle.png";
import mongo from "../assets/mongodb.jpg";
import Reacte from "../assets/reactjs.png";
import SQLe from "../assets/Redux.svg";
import innovgeistLogo from "../assets/innovgeistLogo.png";
import gravitonLogo from "../assets/graviton.png";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: mongo, name: "MongoDB" },
    { id: 7, logo: Reacte, name: "React" },
    { id: 8, logo: SQLe, name: "Redux" },
  ];

  const workExperience = [
    {
      company: "Innovgeist",
      logo: innovgeistLogo,
      role: "Frontend Developer",
      duration: "October 2025 – present",
      description: [
        "Implemented Redux state management and Material UI in React applications, improving scalability and user experience.",
        "Optimized database schemas and RESTful APIs with Node.js and MongoDB, boosting performance by 25% and reducing query response time",
        "Collaborated with senior developers to debug and optimize high-traffic applications using Git and Chrome DevTools, enhancing system efficiency by 20%.",
        "Refactored API logic and integrated third-party libraries, reducing latency by 35% while ensuring adherence to modern ES6+ coding standards."
      ],
    },
    {
      company: "GravitonWeb Technology",
      logo: gravitonLogo,
      role: "Software Developer",
      duration: "July 2024 - July 2025",
      description: [
        "Built Hola9 Classifieds platform using React.js, Redux, and Ant Design enhanced user acquisition by 20%.",
        "Created e-commerce UI with secure checkout, improving transaction success rate by 18%.",
        "Developed a real-time taxi booking system integrating REST APIs; reduced booking latency by 35%",
        "Designed interactive dashboards to track user engagement, increasing feature adoption by 25%.",
        " Collaborated on end-to-end lifecycle phases including requirement analysis, development, testing, and deployment monitoring."
      ],
    }
  ];
  
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-teal-400 drop-shadow-lg">
          Experience
        </h1>
        <p className="text-lg text-gray-300 font-light text-center leading-relaxed mb-10">
          I've accumulated more than 1 year of experience working with the
          following technologies, delivering impactful and scalable solutions.
        </p>

        {/* Technologies Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-gray-100/10 backdrop-blur-sm border-[2px] border-gray-200/20 rounded-lg md:w-[200px] md:h-[200px] shadow-lg p-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] rounded-full shadow-md mb-4"
                alt={name}
              />
              <h3 className="text-lg font-semibold text-gray-200">{name}</h3>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <h2 className="text-2xl font-bold text-purple-300 mb-6 text-center">
          Work Experience
        </h2>
        <div className="space-y-10">
          {workExperience.map(({ company, logo, role, duration, description }, index) => (
            <div
              key={index}
              className="flex items-start bg-gray-100/10 backdrop-blur-sm border-[2px] border-gray-200/20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-x-4"
            >
              <img
                src={logo}
                alt={company}
                className="w-16 h-16 object-contain rounded-md shadow-sm"
              />
              <div>
                <h3 className="text-2xl font-bold text-teal-300 mb-2">
                  {company}
                </h3>
                <p className="text-lg font-semibold text-purple-200">{role}</p>
                <p className="text-sm text-gray-400 mb-4">{duration}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
