import React, { useRef, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppDevelopment from "../assets/images/app-development.svg";
import Competitions from "../assets/images/competitions.svg";
import ContentCreation from "../assets/images/content-creation.svg";
import Guitar from "../assets/images/guitar.svg";
import MusicIcons from "../assets/images/music-icons.svg";
import Performances from "../assets/images/performances.svg";
import Tutoring from "../assets/images/tutoring.svg";
import Workshops from "../assets/images/workshops.svg";
import FAQ from "../components/Home/FAQ";
import ContactSection from "../components/Home/ContactSection";
import Footer from "../components/Footer";
import UpcomingEvents from "../components/Home/UpcomingEvents";
import Team from "../components/Home/Team";

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
      <Helmet>
        <title>Musical Memories</title>
        <meta name="description" content="Welcome to Musical Memories - Providing students with an exciting and engaging way to develop their skills in the world of music." />
      </Helmet>
      <main className="flex flex-col md:flex-row justify-between items-center md:items-start py-8 md:py-16 max-w-7xl mx-auto px-4">
        <div className="max-w-xl mt-8 md:mt-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 text-mm-dark">
            Welcome to
            <br />
            Musical Memories
          </h1>
          <p className="text-lg md:text-xl text-mm-dark mb-6 md:mb-12">
            Providing students with an exciting and engaging way to develop
            their skills in the world of music
          </p>
          <a href="/get-involved">
          <button className="px-6 py-3 md:px-8 md:py-4 bg-mm-dark text-white font-semibold rounded-xl">
            Join us
          </button>
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:pt-20 md:self-end">
          <img
            src={Guitar}
            alt="Person playing guitar"
            className="h-64 md:h-4xl"
          />
        </div>
      </main>

      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto py-8 md:py-16 px-4"
      >
        <div className="flex items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">
            What we do
          </h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-center md:text-left">
            At our nonprofit organization, we offer a range of services to
            spread the joy of music to the global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { title: "One-on-one tutoring", bg: "bg-mm-gray", img: Tutoring, id: "tutoring", path: "/get-involved" },
            {
              title: "High-quality performances",
              bg: "bg-mm-blue",
              img: Performances,
              id: "performances",
              path: "get-involved"
            },
            { title: "Expert workshops", bg: "bg-mm-dark", img: Workshops, id: "workshops", path: "/get-involved" },
            { title: "Fun competitions", bg: "bg-mm-gray", img: Competitions, id: "competitions", path: "/get-involved" },
            {
              title: "Content creation",
              bg: "bg-mm-blue",
              img: ContentCreation,
              id: "content",
              path: "/get-involved"
            },
            { title: "App development", bg: "bg-mm-dark", img: AppDevelopment, id: "app-dev", path: "/get-involved" },
          ].map((item, index) => (
            <Link
              key={index}
              to={`${item.path}#${item.id}`}
              ref={(el) => (boxRefs.current[index] = el)}
              className={`${item.bg} rounded-[30px] md:rounded-[45px] p-6 md:p-10 border border-mm-dark shadow-[0_5px_0_0_#191A23] flex flex-col md:flex-row justify-between items-center relative overflow-hidden`}
            >
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 bg-white inline-block px-3 py-1 rounded-md">
                  {item.title}
                </h3>
                <div className={`flex items-center justify-center md:justify-start font-semibold mt-4 md:mt-6 ${item.bg === 'bg-mm-dark' ? 'text-white' : 'text-mm-dark'}`}>
                  I want in
                  <span className={`ml-2 rounded-full p-2 inline-flex items-center justify-center ${item.bg === 'bg-mm-dark' ? 'bg-white' : 'bg-black'}`}>
                    <svg
                      ref={(el) => (arrowRefs.current[index] = el)}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 md:h-6 md:w-6 ${item.bg === 'bg-mm-dark' ? 'text-black' : 'text-white'}`}
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
                className="h-32 w-32 md:h-40 md:w-40 object-contain"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-8 md:py-16 px-4">
        <div className="bg-mm-gray rounded-2xl md:rounded-3xl py-8 md:py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-xl text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-mm-dark mb-4">
              We make things happen.
            </h2>
            <p className="text-lg md:text-xl text-mm-dark mb-6 md:mb-8">
              Have an idea? Want to do something different? Share your thoughts
              with our team!
            </p>
            <a href="mailto:musicalmemories2023@gmail.com">
            <button className="px-5 py-2 md:px-6 md:py-3 bg-mm-dark text-white font-semibold rounded-xl text-base md:text-lg">
              Email us
            </button>
            </a>
          </div>
          <div>
            <img
              src={MusicIcons}
              alt="Music Notes"
              className="h-32 w-32 md:h-40 md:w-40"
            />
          </div>
        </div>
      </section>
      <UpcomingEvents />
      <Team />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
