import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";

export const Navbar = ({ scrollToContact }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-5xl font-bold"> SG</h1>
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl">
        {/* LinkedIn Icon with link */}
        <a href="https://www.linkedin.com/in/sagar-gopalasetti/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer text-blue-400" />
        </a>

        {/* GitHub Icon with link */}
        {/* <a href="https://github.com/Sagar-Gopalasetti" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-gray-800" />
        </a> */}

        {/* Instagram Icon with link */}
        {/* <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </a> */}

        {/* Phone Icon with scroll-to-contact functionality */}
        <FaPhone onClick={scrollToContact} className="cursor-pointer text-white-500" />
      </div>
    </nav>
  );
};
