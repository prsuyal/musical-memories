import React, { useRef } from "react";
import Houston from "../assets/images/houston.png";
import Bridgewater from "../assets/images/bridgewater.png";
import Holmdel from "../assets/images/holmdel.png";
import LA from "../assets/images/LA.png";
import HongKong from "../assets/images/hongkong.png";
import Fullterton from "../assets/images/fullerton.png";
import Maryland from "../assets/images/maryland 1.png";
import Harrisonburg from "../assets/images/harrisonburg.png";
import ChaptersImage from "../assets/images/chapters.svg";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Chapters = () => {
  const chaptersRef = useRef(null);

  const handleScrollToChapters = () => {
    if (chaptersRef.current) {
      chaptersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Chapters | Musical Memories</title>
        <meta
          name="description"
          content="Explore Musical Memories' global presence with chapters spread over the globe."
        />
      </Helmet>
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-8 md:py-16 max-w-7xl mx-auto px-4">
          <div className="max-w-xl mt-8 md:mt-16 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 text-mm-dark">
              Chapters
            </h1>
            <p className="text-lg md:text-xl text-mm-dark mb-6 md:mb-12">
              Explore our global presence, with chapters being set up all over
              the world.
            </p>
            <button
              onClick={handleScrollToChapters}
              className="px-6 py-3 md:px-8 md:py-4 bg-mm-dark text-white font-semibold rounded-xl"
            >
              Discover Our Chapters
            </button>
          </div>
          <div className="mt-8 md:mt-0 md:pt-20 md:self-end">
            <img
              src={ChaptersImage}
              alt="Global connection"
              className="h-64 md:h-4xl"
            />
          </div>
        </div>
      </main>

      <div ref={chaptersRef}>
        <div className="relative flex justify-end py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-l-3xl overflow-hidden bg-mm-dark text-white">
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Houston</h2>
                <p>
                  Located in the vibrant suburbs of Texas, this chapter is
                  committed to spreading the mission of Musical Memories within
                  their local community.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 h-full">
              <img
                src={Houston}
                alt="Houston cityscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative flex justify-start py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-r-3xl overflow-hidden bg-mm-gray text-black">
            <div className="md:w-1/2 h-full">
              <img
                src={Bridgewater}
                alt="Bridgewater cityscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bridgewater</h2>
                <p>
                  This New Jersey chapter stands out for its dedicated focus on
                  individuals with special needs and learning disabilities. By
                  offering free music lessons tailored to each child’s unique
                  abilities, they strive to demonstrate the beauty of music as a
                  universal language.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-end py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-l-3xl overflow-hidden bg-mm-blue text-black">
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Holmdel</h2>
                <p>
                  This New Jersey chapter is dedicated to creating a symphony of
                  opportunity through the power of music. This chapter empowers
                  individuals of all backgrounds.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 h-full">
              <img
                src={Holmdel}
                alt="Holmdel landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative flex justify-start py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-r-3xl overflow-hidden bg-mm-dark text-white">
            <div className="md:w-1/2 h-full">
              <img
                src={LA}
                alt="Los Angeles cityscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Los Angeles</h2>
                <p>
                  This California chapter helped Musical Memories expand into
                  the West Coast. Through their efforts, they aim to foster a
                  vibrant musical culture in the heart of California.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-end py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-l-3xl overflow-hidden bg-mm-gray text-black">
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Hong Kong</h2>
                <p>
                  The Hong Kong chapter of Musical Memories is devoted to
                  uplifting the spirits of patients through musical performances
                  in hospitals. They seek to blend the healing power of music
                  with healthcare, enriching lives and fostering a love for
                  music within their own community.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 h-full">
              <img
                src={HongKong}
                alt="Hong Kong cityscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative flex justify-start py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-r-3xl overflow-hidden bg-mm-blue text-black">
            <div className="md:w-1/2 h-full">
              <img
                src={Fullterton}
                alt="Fullerton landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Fullerton</h2>
                <p>
                  This California chapter of Musical Memories is dedicated to
                  bringing the healing power of music to children in hospitals.
                  With a focus on partnering with CHOC (Children's Hospital of
                  Orange County), this chapter aims to uplift young patients'
                  spirits through musical performances and activities, providing
                  comfort and joy during challenging times.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-end py-8">
          <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-l-3xl overflow-hidden bg-mm-gray text-black">
            <div className="md:w-1/2 p-8 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Maryland</h2>
                <p>
                  The Maryland chapter of Musical Memories is based in Anne
                  Arundel County. They are dedicated to enhancing the relation
                  between music and the world of science and medicine!
                </p>
              </div>
            </div>
            <div className="md:w-1/2 h-full">
              <img
                src={Maryland}
                alt="Maryland"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-start py-8">
        <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-stretch rounded-r-3xl overflow-hidden bg-mm-blue text-black">
          <div className="md:w-1/2 h-full">
            <img
              src={Harrisonburg}
              alt="Harrisonburg landscape"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Virginia</h2>
              <p>
                The Virginia chapter of Musical Memories, based in Harrisonburg,
                is dedicated to instiling confidence in the next generation of
                musicians through various outreach events and junior regional
                orchestra tutoring sessions. They also hope to perform at
                community spaces such as libraries and animal shelters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chapters;
