import React, { useState } from "react";
import GmailIconBlack from "../assets/images/icons8-gmail-black.svg";
import GmailIcon from "../assets/images/icons8-gmail.svg";
import TikTokIcon from "../assets/images/icons8-tiktok.svg";
import TikTokIconBlack from "../assets/images/icons8-tiktok-black.svg";
import InstagramIcon from "../assets/images/icons8-instagram.svg";
import InstagramIconBlack from "../assets/images/icons8-instagram-black.svg";
import DiscordIcon from "../assets/images/icons8-discord.svg";
import DiscordIconBlack from "../assets/images/icons8-discord-black.svg";

const IconWithHover = ({ defaultIcon, hoverIcon, alt, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center"
    >
      <img
        src={isHovered ? hoverIcon : defaultIcon}
        alt={alt}
        className="w-5 h-5"
      />
    </a>
  );
};

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <footer className="bg-[#191A23] text-white py-8 px-8 rounded-t-[2.5rem] mt-8">
        <nav className="flex justify-between items-center mb-12">
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#impact" className="hover:underline">
                Impact
              </a>
            </li>
            <li>
              <a href="#chapters" className="hover:underline">
                Chapters
              </a>
            </li>
            <li>
              <a href="#donate" className="hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="#get-involved" className="hover:underline">
                Get Involved
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <IconWithHover
              defaultIcon={TikTokIconBlack}
              hoverIcon={TikTokIcon}
              alt="TikTok"
              link="https://www.tiktok.com/@musical.memories2?_t=8nuUom4GLVL&_r=1"
            />
            <IconWithHover
              defaultIcon={InstagramIconBlack}
              hoverIcon={InstagramIcon}
              alt="Instagram"
              link="https://www.instagram.com/musicalmemories23"
            />
            <IconWithHover
              defaultIcon={DiscordIconBlack}
              hoverIcon={DiscordIcon}
              alt="Discord"
              link="https://discord.gg/rBQVEEfNjKs"
            />
          </div>
        </nav>

        <div className="flex justify-between items-start mb-12">
          <div>
            <h3 className="text-[#b8dcff] text-lg mb-2 inline-block px-2 py-1 rounded-md bg-[#2D2F3E]">
              Contact us:
            </h3>
            <p className="mt-2 text-md">musicalmemories2023@gmail.com</p>
          </div>
          <div className="bg-[#2D2F3E] rounded-lg p-4 flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 rounded-l-lg px-4 py-2 focus:outline-none w-64"
            />
            <button
              type="submit"
              className="bg-[#b8dcff] text-[#191A23] px-6 py-2 rounded-r-lg font-semibold hover:bg-white transition duration-300"
            >
              Get more information
            </button>
          </div>
        </div>

        <hr className="border-gray-600 mb-6" />

        <div className="text-sm text-gray-400">
          <p>© 2024 Musical Memories. All Rights Reserved.</p>
          <p>Made by Pranshu Suyal for Musical Memories.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
