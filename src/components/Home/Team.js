import React from "react";

import Paritosh from '../../assets/images/Paritosh.jpg'
import Josh from '../../assets/images/Josh.png'
import Amanda from '../../assets/images/AmandaZheng.jpg'
import Olivia from '../../assets/images/Olivia.jpg'
import gmail from "../../assets/images/icons8-gmail-black.svg";

const TeamMember = ({ image, name, role, email }) => (
  <div className="bg-white rounded-[45px] border border-[#191A23] shadow-[0_5px_0_0_#191A23] p-6 flex md:flex-row flex-col md:items-center items-center md:space-x-4 space-y-4 md:space-y-0 text-center md:text-left">
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="flex-grow">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
      <img src={gmail} alt="Email" className="w-6 h-6 cursor-pointer" />
    </a>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      image: Paritosh,
      name: "Paritosh Bhole",
      role: "President",
      email: "officialparitoshbhole@gmail.com",
    },
    {
      image: Josh,
      name: "Josh Li",
      role: "Vice President",
      email: "boredboi034825@gmail.com",
    },
    {
      image: Amanda,
      name: "Amanda Zheng",
      role: "Director, Musical Hospice",
      email: "amazheng2@gmail.com",
    },
    {
      image: Olivia,
      name: "Olivia Swarup",
      role: "Director, Tutoring",
      email: "oliviaswarup@gmail.com",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex items-center mb-8 flex-col md:flex-row">
        <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">
          Team
        </h2>
        <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-center md:text-left">
          Meet the people behind this mission to spread joy
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      <div className="mt-8 flex justify-center md:justify-end">
        <a href="/about">
        <button className="bg-[#191A23] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300">
          About Us
        </button>
        </a>
      </div>
    </section>
  );
};

export default Team;
