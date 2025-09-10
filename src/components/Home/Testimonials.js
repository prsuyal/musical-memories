import React from "react";

import GeoffreyBruleson from "../../assets/images/GeoffreyBruleson.png";

const TestimonialCard = ({ image, text, name, role, reverse }) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center bg-white rounded-[45px] border border-[#191A23] shadow-[0_5px_0_0_#191A23] p-8 mb-12`}
  >
    <div className="flex flex-col items-center text-center md:text-left w-full md:w-1/3 px-6">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h3 className="font-bold text-lg text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{role}</p>
    </div>

    <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
      <p className="text-gray-700 italic">“{text}”</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      image: GeoffreyBruleson,
      text: "It was deeply inspirational and the greatest pleasure to perform and speak at Musical Memories’ wonderful, vibrant event at New York’s famed Kaufman Center. Musical Memories does such fantastic, righteous work connecting with underserved communities and refugees in the greater NYC area to provide free music lessons, music therapy sessions, outreach to residents of assisted living facilities, and support for research focusing on the effects of music on dementia. They are richly deserving of support, and I am sure that they will continue to flourish in the New York City area and beyond.",
      name: "Geoffrey Burleson",
      role: "Professor of Music and Director of Piano Studies, Hunter College-CUNY",
    },
    //{
      //image: ,
      //text: "",
      //name: "",
      //role: "",
    //},
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex items-center mb-12 flex-col md:flex-row">
        <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">
          Testimonials
        </h2>
        <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-center md:text-left">
          Hear from the people we've worked with
        </p>
      </div>
      <div>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;