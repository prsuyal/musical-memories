import React from 'react';
import ImpactImage from '../assets/images/impact.svg';
import Gallery from '../assets/images/gallary.png';
import Footer from '../components/Footer';

const Impact = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-mm-dark">Our Impact</h1>
            <p className="text-lg md:text-xl text-mm-dark mb-6">
              Since launch, Musical Memories has affected
              hundreds of people from all walks of life.
            </p>
            <button className="px-6 py-3 md:px-8 md:py-4 bg-mm-dark text-white font-semibold rounded-xl">
              Explore
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src={ImpactImage}
              alt="People celebrating"
              className="h-64 md:h-96 w-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-0">
            The Journey So Far
          </h2>
          <p className="text-lg md:text-xl text-mm-dark text-center md:text-right md:max-w-md">
            We take action,<br />we make impact.
          </p>
        </div>
      </main>

      <div className="w-full mb-16">
        <div className=" mx-auto flex flex-col space-y-8">
          <div className="bg-mm-blue text-2xl font-semibold p-4 rounded-r-full md:w-1/2 flex items-center justify-center">
            Across <span className="font-bold mx-2">ten</span> states,
          </div>
          <div className="bg-mm-gray text-2xl font-semibold p-4 rounded-l-full md:w-1/2 md:self-end flex items-center justify-center">
            <span className="font-bold mx-2">six</span> countries,
          </div>
          <div className="bg-mm-dark text-white text-2xl font-semibold p-4 rounded-r-full md:w-1/2 flex items-center justify-center">
            and over <span className="font-bold mx-2">seven hundred</span> people,
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 w-full py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Musical Memories has</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-2">Empowered Immigrant Communities</h3>
              <p>Partnered with Aslan Youth Ministries to provide music therapy and workshops for Haitian immigrants, fostering a sense of belonging and community through the power of music.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Supported Refugees</h3>
              <p>Collaborated with the International Rescue Committee to deliver musical experiences to refugees from diverse backgrounds, offering comfort and a sense of normalcy amidst challenging circumstances.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Engaged Young Minds</h3>
              <p>Conducted interactive workshops designed specifically for children, making learning fun through engaging, hands-on musical activities.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Advanced the Research Community</h3>
              <p>Organized a virtual International Research Competition, encouraging participants from around the world to study the effects of music on dementia and propose innovative solutions to enhance the quality of life for those affected.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Enriched Senior Living</h3>
              <p>Regularly visited senior homes like Applewood and Sunrise, bringing joy, nostalgia, and connection through tailored music sessions, improving the emotional well-being of residents.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-0">
            Gallery Extracts
          </h2>
          <p className="text-lg md:text-xl text-mm-dark text-center md:text-right">
            Because a picture is worth a<br />1000 words
          </p>
        </div>
        <img src={Gallery} alt="Gallery of Musical Memories events" className="w-full" />
      </div>

      <Footer />
    </div>
  );
};

export default Impact;