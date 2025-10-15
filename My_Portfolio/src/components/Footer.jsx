import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub  } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
      <hr className="border-t-2 border-gray-300 my-10" />
      <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://github.com/upendra100279"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.instagram.com/upendra_ig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/upendra-chauhan-931748230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                href="https://leetcode.com/u/upendra100279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
              >
                <SiLeetcode size={30} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-300 pt-8 flex flex-col items-center">
              <p className="text-md text-gray-700 font-light">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Built by <span className="text-blue-600">Ramkrishna Singh</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;