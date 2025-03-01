import React, { useState } from "react";
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
      className="bg-white rounded-full p-1 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center"
    >
      <img
        src={isHovered ? hoverIcon : defaultIcon}
        alt={alt}
        className="w-4 h-4 md:w-5 md:h-5"
      />
    </a>
  );
};

const Footer = () => {
  return (
    <div className="w-full md:max-w-7xl mx-auto px-0 md:px-4">
      <footer className="bg-[#191A23] text-white py-6 md:py-8 px-4 md:px-8 md:rounded-t-[2.5rem] mt-8">
        <nav className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 mb-4 md:mb-0">
            <li>
              <a href="/about" className="hover:underline text-sm md:text-base">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/impact"
                className="hover:underline text-sm md:text-base"
              >
                Impact
              </a>
            </li>
            <li>
              <a
                href="/chapters"
                className="hover:underline text-sm md:text-base"
              >
                Chapters
              </a>
            </li>
            <li>
              <a
                href="https://hcb.hackclub.com/donations/start/musical-memories"
                className="hover:underline text-sm md:text-base"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfpZDwA1pvCyDs6h1tYB0-3vGZqZw76NrCbez3RSs4PQqy_zQ/viewform?usp=dialog"
                className="hover:underline text-sm md:text-base"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="/get-involved"
                className="hover:underline text-sm md:text-base"
              >
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
              link="https://discord.gg/jRSvKpcVxK"
            />
          </div>
        </nav>

        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div className="text-center">
            <h3 className="text-[#b8dcff] text-base md:text-lg mb-2 inline-block px-2 py-1 rounded-md bg-[#2D2F3E]">
              Contact us:
            </h3>
            <p className="mt-2 text-sm md:text-md">
              musicalmemories2023@gmail.com
            </p>
          </div>
        </div>

        <hr className="border-gray-600 mb-4 md:mb-6" />

        <div className="text-xs md:text-sm text-gray-400 text-center">
          <p>© 2025 Musical Memories. All Rights Reserved.</p>
          <p>Made by Pranshu Suyal for Musical Memories.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
