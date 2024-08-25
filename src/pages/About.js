import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import PaavniImage from '../assets/images/paavni.png';
import PranshuImage from '../assets/images/pranshu-new.png';
import AbhinavImage from '../assets/images/abhinav-new.png';
import ChinmayiImage from '../assets/images/chinmayi-new.png';
import AboutUs from '../assets/images/aboutus.svg';
import Ariana from '../assets/images/ariana.svg';
import Pranav from '../assets/images/pranav.svg';
import Aryan from '../assets/images/aryan.svg';
import Rodaina from '../assets/images/rodaina.svg';
import Brooklyn from '../assets/images/brooklyn.svg';
import Rachel from '../assets/images/rachel.svg';
import Paritosh from '../assets/images/paritosh.svg';
import Maya from '../assets/images/maya.svg';
import Rudra from '../assets/images/rudra.svg';
import Christine from '../assets/images/christine.svg';
import Aleena from '../assets/images/aleena.svg';
import Footer from '../components/Footer';

const About = () => {
  const teamRef = useRef(null);

  const handleScrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Paavni Suyal",
      role: "Co-founder, President",
      image: PaavniImage,
      bio: "Hi, I'm Paavni! I'm President at Musical Memories, and I'm in charge of managing and overseeing the organization as a whole, providing strategic, financial, and operational leadership. I'm a current senior at Biotechnology High School! I have been playing the piano and flute for eight and six years, respectively, and as such, they have become two vital components of my identity. My musical experiences are something I cherish very much, and as I look back on them, each one seems more enchanting than the last. With Musical Memories, I hope to spread my love of music to you guys and make more wonderful memories along the way!"
    },
    {
      name: "Pranshu Suyal",
      role: "Co-founder, Vice President",
      image: PranshuImage,
      bio: "Hi, I'm Pranshu, a senior at High Technology High School. I'm Vice President at Musical Memories, helping Paavni oversee the organization. I'm also in charge of web development at the organization. I have many years of experience playing the piano and trombone. I am fueled by a desire to create a vibrant community centered around the universal language of music. With Musical Memories, I hope to spread my love of music to those around me and make some wonderful memories along the way."
    },
    {
      name: "Chinmayi Palya",
      role: "Director, Musical Hospice",
      image: ChinmayiImage,
      bio: "Hi, I'm Chinmayi! I'm a senior at Biotechnology High School. I lead the musical hospice project at Musical Memories. I've been playing the violin for 10 years now, and I've been playing the flute for 6. Music has brought so much happiness into my life, from the diverse knowledge it has taught me to the meaningful connections it has enabled me to form. I can't wait to share the joy of music with my community!"
    },
    {
      name: "Abhinav Kartik",
      role: "Director, Tutoring",
      image: AbhinavImage,
      bio: "Hi, I'm Abhinav, a senior at High Technology High School. I lead the tutoring project at Musical Memories. I am also a web developer and designer for our organization. I have been playing the alto saxophone for over seven years. In that time, I have found a drive to spread the knowledge I've gained to others, as music is one of the most beautiful forms of expression in the world. At Musical Memories, I hope I can help give others a chance to experience the bliss I feel when I'm connected to music."
    }
  ];

  const extendedTeamMembers = [
    { name: "Aleena Shinde", role: "Manager, PR", image: Aleena },
    { name: "Christine Cho", role: "Manager, Instagram", image: Christine },
    { name: "Rudra Patel", role: "Manager, TikTok", image: Rudra },
    { name: "Maya Oommen", role: "Intern, Op. Mgt.", image: Maya },
    { name: "Paritosh Bhole", role: "Intern, HR", image: Paritosh },
    { name: "Rachel Su", role: "Intern, HR", image: Rachel },
    { name: "Brooklyn Chelakadan", role: "Intern, Op. Mgt.", image: Brooklyn },
    { name: "Rodaina Nasreldeen", role: "Intern, Op. Mgt.", image: Rodaina },
    { name: "Aryan Desai", role: "Intern, HR", image: Aryan },
    { name: "Pranav Arun", role: "Intern, Event Coord.", image: Pranav },
    { name: "Ariana Li", role: "Intern, PR", image: Ariana }
  ];

  return (
    <div className="bg-white min-h-screen">
        <Helmet>
        <title>About | Musical Memories</title>
        <meta name="description" content="Meet the people who work to make Musical Memories a reality." />
      </Helmet>
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-8 md:py-16 max-w-7xl mx-auto px-4">
          <div className="max-w-xl mt-8 md:mt-16 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 text-mm-dark">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-mm-dark mb-6 md:mb-12">
              Meet the people working to make this a reality.
            </p>
            <button
              onClick={handleScrollToTeam}
              className="px-6 py-3 md:px-8 md:py-4 bg-mm-dark text-white font-semibold rounded-xl"
            >
              Meet the Team
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:pt-20 md:self-end">
            <img
              src={AboutUs}
              alt="People collaborating"
              className="h-64 md:h-4xl"
            />
          </div>
        </div>

        <div ref={teamRef} className="bg-gray-100 p-8 rounded-tr-[40px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative w-full max-w-xs mx-auto group">
              <div className="aspect-w-3 aspect-h-4 rounded-tr-[40px] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-full bg-white opacity-0 group-hover:opacity-95 transition-opacity duration-300 overflow-y-scroll p-4 rounded-tr-[40px]">
                  <div className="h-3/4 overflow-y-scroll">
                    <p className="text-sm text-mm-dark">{member.bio}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75 w-full">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-mm-dark">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {extendedTeamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
