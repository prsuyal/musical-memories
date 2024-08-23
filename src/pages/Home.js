import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppDevelopment from "../assets/images/app-development.svg";
import Competitions from "../assets/images/competitions.svg";
import ContactMusicIcon from "../assets/images/contact-music-icon.svg";
import ContentCreation from "../assets/images/content-creation.svg";
import Mail from "../assets/images/icons8-gmail.svg";
import MailBlack from "../assets/images/icons8-gmail-black.svg";
import Guitar from "../assets/images/guitar.svg";
import MusicIcons from "../assets/images/music-icons.svg";
import Performances from "../assets/images/performances.svg";
import Tutoring from "../assets/images/tutoring.svg";
import Workshops from "../assets/images/workshops.svg";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const arrowRefs = useRef([]);
  const boxRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    arrowRefs.current.forEach((arrow, index) => {
      const box = boxRefs.current[index];

      const updateArrow = (e) => {
        const arrowRect = arrow.getBoundingClientRect();
        const angle = Math.atan2(
          e.clientY - (arrowRect.top + arrowRect.height / 2),
          e.clientX - (arrowRect.left + arrowRect.width / 2)
        );
        gsap.to(arrow, {
          rotation: angle * (180 / Math.PI),
          duration: 0.2,
          ease: "power2.out",
        });
      };

      const resetArrow = () => {
        gsap.to(arrow, {
          rotation: -15,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      box.addEventListener("mousemove", updateArrow);
      box.addEventListener("mouseleave", resetArrow);

      // this is the hover effect
      box.addEventListener("mouseenter", () => {
        gsap.to(box, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      });
      box.addEventListener("mouseleave", () => {
        gsap.to(box, { scale: 1, duration: 0.3, ease: "power2.out" });
      });

      // this is the press effect
      box.addEventListener("mousedown", () => {
        gsap.to(box, { boxShadow: "0 8px 0 0 #191A23", y: 1, duration: 0.1 });
      });
      box.addEventListener("mouseup", () => {
        gsap.to(box, { boxShadow: "0 5px 0 0 #191A23", y: 0, duration: 0.1 });
      });

      // this is the flying in from the sides effect
      boxRefs.current.forEach((box, index) => {
        gsap.set(box, { autoAlpha: 0, x: index % 2 === 0 ? -50 : 50 });

        ScrollTrigger.create({
          trigger: box,
          start: "top bottom-=100",
          end: "bottom top+=100",
          onEnter: () => {
            gsap.to(box, {
              duration: 0.8,
              autoAlpha: 1,
              x: 0,
              ease: "bounce.out",
            });
          },
          once: true,
        });
      });

      return () => {
        box.removeEventListener("mousemove", updateArrow);
        box.removeEventListener("mouseleave", resetArrow);
      };
    });

    arrowRefs.current.forEach((arrow) => {
      gsap.set(arrow, { rotation: -15 });
    });
  }, []);

  return (
    <div className="bg-white">
      <main className="flex justify-between items-start py-16 max-w-7xl mx-auto px-4">
        <div className="max-w-xl mt-16">
          <h1 className="text-6xl mb-12 text-mm-dark">
            Welcome to
            <br />
            Musical Memories
          </h1>
          <p className="text-xl text-mm-dark mb-12">
            Providing students with an exciting and engaging way to develop
            their skills in the world of music
          </p>
          <button className="px-8 py-4 bg-mm-dark text-white font-semibold rounded-xl">
            Join us
          </button>
        </div>
        <div className="pt-20 self-end">
          <img src={Guitar} alt="Person playing guitar" className="h-4xl" />
        </div>
      </main>

      <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">
            What we do
          </h2>
          <p className="text-xl text-mm-dark">
            At our nonprofit organization, we offer a range of services to
            spread the joy of music to the global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "One-on-one tutoring", bg: "bg-mm-gray", img: Tutoring },
            {
              title: "High-quality performances",
              bg: "bg-mm-blue",
              img: Performances,
            },
            { title: "Expert workshops", bg: "bg-mm-dark", img: Workshops },
            { title: "Fun competitions", bg: "bg-mm-gray", img: Competitions },
            {
              title: "Content creation",
              bg: "bg-mm-blue",
              img: ContentCreation,
            },
            { title: "App development", bg: "bg-mm-dark", img: AppDevelopment },
          ].map((item, index) => (
            <button
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className={`${item.bg} rounded-[45px] p-10 border border-mm-dark shadow-[0_5px_0_0_#191A23] flex justify-between items-center relative overflow-hidden`}
            >
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 bg-white inline-block px-3 py-1 rounded-md">
                  {item.title}
                </h3>
                <div className="flex items-center text-mm-dark font-semibold mt-6">
                  I want in
                  <span className="ml-2 bg-black rounded-full p-2 inline-flex items-center justify-center">
                    <svg
                      ref={(el) => (arrowRefs.current[index] = el)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-40 object-contain"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="bg-mm-gray rounded-3xl py-16 px-12 flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-mm-dark mb-4">
              We make things happen.
            </h2>
            <p className="text-xl text-mm-dark mb-8">
              Have an idea? Want to do something different? Share your thoughts
              with our team!
            </p>
            <button className="px-6 py-3 bg-mm-dark text-white font-semibold rounded-xl text-lg">
              Email us
            </button>
          </div>
          <div>
            <img src={MusicIcons} alt="Music Notes" className="h-40 w-40" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold bg-mm-blue px-4 py-2 rounded-lg">
            Upcoming Events
          </h2>
          <p className="text-xl text-mm-dark">What are we up to these days?</p>
        </div>

        <div className="bg-mm-dark rounded-3xl p-8">
          <div className="flex justify-between text-white">
            <div className="flex-1 border-r border-gray-600 pr-8">
              <h3 className="text-3xl font-bold mb-3 text-mm-blue">
                NYC Kaufman Music Event
              </h3>
              <p className="text-2xl font-bold mb-2">August 30</p>
              <p className="text-xl mb-4">6-8 PM</p>
              <p className="mb-4">
                Join us for an enchanting evening at the Kaufman Music Center's
                Ann Goodman Recital Hall. Experience captivating performances
                and inspiring talks from renowned artists.
              </p>
              <button className="bg-mm-blue text-white py-2 px-4 rounded-lg flex items-center hover:bg-opacity-80 transition duration-300">
                Register Now <span className="ml-2">→</span>
              </button>
            </div>

            <div className="flex-1 border-r border-gray-600 px-8">
              <h3 className="text-3xl font-bold mb-3 text-mm-blue">
                Virtual Music Competition
              </h3>
              <p className="text-2xl font-bold mb-4">Aug 17 - Oct 17</p>
              <p className="mb-4">
                Showcase your talent in our international competition! Perform
                or compose a piece and get evaluated by world-renowned mentors.
                Open to all skill levels and genres.
              </p>
              <p className="text-lg font-semibold mb-4">
                Submit via the second link in our Linktree.
              </p>
              <button className="bg-mm-blue text-white py-2 px-4 rounded-lg flex items-center hover:bg-opacity-80 transition duration-300">
                Learn More <span className="ml-2">→</span>
              </button>
            </div>

            <div className="flex-1 pl-8">
              <h3 className="text-3xl font-bold mb-3 text-mm-blue">
                Coming Soon...
              </h3>
              <p className="text-2xl font-bold mb-4">Stay Tuned!</p>
              <p className="mb-4">
                We're cooking up something exciting! More events and
                opportunities are on the horizon. Be the first to know about our
                upcoming musical adventures.
              </p>
              <button className="bg-mm-blue text-white py-2 px-4 rounded-lg flex items-center hover:bg-opacity-80 transition duration-300">
                Get Notified <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
