import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import AboutUs from '../assets/images/aboutus.svg';
//import Ariana from '../assets/images/ariana.svg';
//import Pranav from '../assets/images/pranav.svg';
//import Aryan from '../assets/images/aryan.svg';
//import Rodaina from '../assets/images/rodaina.svg';
//import Brooklyn from '../assets/images/brooklyn.svg';
//import Rachel from '../assets/images/rachel.svg';
//import Maya from '../assets/images/maya.svg';
//import Rudra from '../assets/images/rudra.svg';
//import Christine from '../assets/images/christine.svg';
//import Annika from '../assets/images/annika.svg';
//import Treya from '../assets/images/treya.svg';
//import Aleena from '../assets/images/Aleena.jpg';
import Paritosh from '../assets/images/Paritosh.jpg'
import Josh from '../assets/images/Josh.png'
import Amanda from '../assets/images/AmandaZheng.jpg'
import Olivia from '../assets/images/Olivia.jpg'
import Gianna from '../assets/images/GiannaWildrick.jpg'
import Manu from '../assets/images/Manu.jpg'
import Eryn from '../assets/images/Eryn.jpg'
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
      name: "Paritosh Bhole",
      role: "President",
      image: Paritosh,
      bio: "My name is Paritosh Bhole and I'm a rising senior from Bridgewater, NJ. I've been a cellist for about 7 years now, and I love being a part of my school's orchestra. Away from music, I'm involved in debate, journalism, and I love spending time with friends and family. I joined Musical Memories because their mission really resonated with me, and it's been a rewarding experience to be a part of this organization. It's an honor to be named Musical Memories's president and I'm looking forward to what we can accomplish!"
    },
    {
      name: "Josh Li",
      role: "Vice President",
      image: Josh,
      bio: "Hi, I'm Josh, a senior from Bridgewater NJ. I'm Vice President at Musical Memories, helping Paritosh oversee the organization. I'm also in charge of web development at the organization. I have many years of experience playing the violin, and I am fueled by a desire to create a vibrant community centered around the universal language of music. With Musical Memories, I hope to spread my love of music to those around me and make some wonderful memories along the way."
    },
    {
      name: "Amanda Zheng",
      role: "Director, Musical Hospice",
      image: Amanda,
      bio: "Hi everyone! I'm Amanda Zheng and I'm the new Director of Musical Hospice! I'm a rising junior from Middletown, NJ. I've always loved music and have been playing the flute since fourth grade. I'm part of marching band, but besides music I also enjoy reading, hanging with friends, and going out anywhere. I'm so excited to be part of Musical Memories and can't wait to not only continue the old events but start new ones!"
    },
    {
      name: "Olivia Swarup",
      role: "Director, Tutoring",
      image: Olivia,
      bio: "Hi! My name is Olivia Swarup and I'm a rising junior in West Windsor, NJ. I've been playing the double bass for around 4 years, and am part of orchestras and chamber groups. I also love to explore different musical genres through the electric bass. I was drawn to Musical Memories throughb my passion for volunteering, as well as my past experiences in teaching. As Director of Tutoring, I am looking forward to helping students find joy in music, and can’t wait to help them build new connections!"
    },
    {
      name: "Eryn Semler",
      role: "Manager, PR",
      image: Eryn,
      bio: "Hi! My name is Eryn Semler, and I'm the new PR director for Musical Memories. I'm also a sophomore from Morganville, NJ. I've been playing the piano for the past 10 years and the clarinet for 6 years! Besides music, I’ve been dancing competitively for nine years, and I am part of my school's dance and graphic design teams. I'm thrilled to be part of Musical Memories because of its amazing mission to spread the love of music. I am so excited to spread Musical Memories' message through many platforms!"
    },
    {
      name: "Manashyu Gadia",
      role: "Chapters Director",  
      image: Manu,
      bio: "My name is Manu (Manashyu gadia) and I am a rising senior from Alpharetta Georgia. I've played recreational piano for almost 5 years and have been playing tennis my whole life. I love hiking and traveling while painting as well. Neuroscience is where I am most passionate and I got involved with the organization due to their research and goals towards helping others through music. I am truly excited to be the organizational chapter director for musical memories!"
    },
    
  ];

  const extendedTeamMembers = [
    { name: "Gianna Wildrick", role: "Manager, TikTok", image: Gianna },
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
              <div className="aspect-[3/4] rounded-tr-[40px] overflow-hidden relative">
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
            <div key={index} className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 object-cover rounded-full"   
              />
              <h3 className="mt-4 font-semibold text-lg text-mm-dark">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
