import React from "react";
import SynEduLogo from "../assets/SynEduLogo.gif";
import EasyTrack from "../assets/easytrack.jpg";
import Covid19 from "../assets/proj2.png";
import SentimentAnalysis from "../assets/sentimentsphare.jpg";
import imageApp from "../assets/premium-pixel-vault.gif";
import paymentGatway from "../assets/paymentgatway.jpg";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: SynEduLogo,
      name: "Sync-Edu",
      liveLink:
        "https://synchronized-du-git-main-upendras-projects-9f7cdaaa.vercel.app/",
      sourceCode: "https://github.com/upendra100279/Synchronized-du.git",
      description:
        "Sync-Edu is a comprehensive learning platform that offers a wide range of courses and resources to help students excel in their studies.  Sync-Edu makes learning engaging and effective.",
    },
    {
      id: 5,
      logo: imageApp,
      name: "Premium Pixel Vault",
      liveLink: "https://premium-pixel-vault-6myn.vercel.app/",
      sourceCode: "https://github.com/upendra100279/Premium-Pixel-vault.git",
      description:
        "Premium Pixel Vault is a cutting-edge image repository that leverages advanced AI algorithms to provide users with high-quality, curated images for their projects.",
    },
    {
      id: 2,
      logo: EasyTrack,
      name: "EasyTrack",
      liveLink:
        "https://ramkrishna0102.github.io/RealTimeGPS-and-VehicleTracking/",
      sourceCode:
        "https://github.com/Ramkrishna0102/RealTimeGPS-and-VehicleTracking",
      description:
        "EasyTrack is a real-time GPS tracking and vehicle management system that provides users with accurate location data and insights. With a user-friendly interface and robust features.",
    },
    {
      id: 3,
      logo: Covid19,
      name: "COVID-19 Prediction and Reporting System",
      liveLink:
        "https://app.powerbi.com/view?r=eyJrIjoiYjBhYWU0NTItMmVhOS00MGM5LTk1ZGEtMTQxZTdmZDUxMWUwIiwidCI6ImUwYjlhZTFlLWViMjYtNDZhOC1hZGYyLWQ3ZGJjZjIzNDBhOSJ9",
      sourceCode:
        "https://github.com/Ramkrishna0102/Covid-19-Prediction-Reporting",
      description:
        "Its is a data-driven platform that provides insights into the spread and impact of the COVID-19 pandemic.It utilizes advanced analytics and visualization tools.",
    },
    {
      id: 4,
      logo: SentimentAnalysis,
      name: "Sentiment Analysis on Social Media Data",
      liveLink: "https://sentiment-analysis.vercel.app",
      sourceCode:
        "https://github.com/upendra100279/Sentiment-Analysis-Project-.git",
      description:
        "Sentiment Analysis on Social Media Data is a project that leverages natural language processing techniques to analyze and visualize sentiments expressed in social media posts.",
    },
    {
      id: 6,
      logo: paymentGatway,
      name: "Payment Gateway",
      liveLink: "https://payment-gateway.vercel.app",
      sourceCode: "https://github.com/your-repo/paymentGatway",
      description:
        "It is a secure online payment processing system that enables businesses to accept payments over the internet. It offers a seamless checkout experience and supports various payment methods.",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-teal-400 drop-shadow-lg">
          Projects
        </h1>
        <span className="text-lg font-semibold text-teal-300">
          List of Projects
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {cardItem.map(
            ({ id, logo, name, liveLink, sourceCode, description }) => (
              <div
                className="md:w-[300px] md:h-[370px] border-[2px] border-gray-200/20 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 bg-gray-200/10 backdrop-blur-sm flex flex-col"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[100px] h-[100px] mx-auto p-2 rounded-full border-[2px] border-gray-300/30 shadow-md bg-gray-100/10"
                  alt={name}
                />
                <div className="text-center mt-4 flex-1">
                  <h3 className="px-2 font-bold text-xl text-purple-400 mb-2">
                    {name}
                  </h3>
                  <p className="px-2 text-gray-300 text-sm">{description}</p>
                </div>
                <div className="flex justify-center space-x-4 mt-6">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 py-2 rounded shadow-md transition-all duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-2 rounded shadow-md transition-all duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
