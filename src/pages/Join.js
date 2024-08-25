import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tutoring from '../assets/images/tutoring.svg';
import Helping from '../assets/images/helping.svg';
import Aslan from '../assets/images/aslan workshop pic.png';
import Sunrise from '../assets/images/sunrise pic.png';
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const GetInvolved = () => {
  const sectionRef = useRef(null);
  const location = useLocation();
  const buttonRefs = useRef([]); 
  const arrowRefs = useRef([]);

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }

    
    buttonRefs.current.forEach((button, index) => {
      const arrow = arrowRefs.current[index];

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

      button.addEventListener("mousemove", updateArrow);
      button.addEventListener("mouseleave", resetArrow);

      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.02, duration: 0.3, ease: "power2.out" });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
      });

      button.addEventListener("mousedown", () => {
        gsap.to(button, { boxShadow: "0 8px 0 0 #191A23", y: 1, duration: 0.1 });
      });
      button.addEventListener("mouseup", () => {
        gsap.to(button, { boxShadow: "0 5px 0 0 #191A23", y: 0, duration: 0.1 });
      });

      return () => {
        button.removeEventListener("mousemove", updateArrow);
        button.removeEventListener("mouseleave", resetArrow);
      };
    });

    arrowRefs.current.forEach((arrow) => {
      gsap.set(arrow, { rotation: -15 });
    });
  }, [location]);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Get Involved | Musical Memories</title>
        <meta name="description" content="Explore all of the different ways to join Musical Memories and contribute to the mission." />
      </Helmet>
      <main className="flex justify-between items-start py-8 md:py-16 max-w-7xl mx-auto px-4 flex-col md:flex-row">
        <div className="max-w-xl mt-8 md:mt-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl mb-6 md:mb-12 text-mm-dark">Get Involved</h1>
          <p className="text-lg md:text-xl text-mm-dark mb-6 md:mb-12">
            Explore the different ways you can contribute to our mission and sign up to make a difference!
          </p>
          <button
            onClick={() => document.getElementById('internships').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 md:px-8 md:py-4 bg-mm-dark text-white font-semibold rounded-xl"
          >
            Join us
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:pt-20 md:self-end">
          <img src={Helping} alt="People holding hands" className="h-64 md:h-4xl" />
        </div>
      </main>

      <section id="internships" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">Internships</h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-center md:text-left">
            Like our mission and want to help out? Join one of our internship teams!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="bg-mm-dark p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-mm-gray mb-4">Executive Management</h3>
            <p className="text-mm-gray text-lg">
              Executive Management Interns report directly to the President of Musical Memories, assisting with the management of the organization as a whole.
            </p>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Human Resources</h3>
            <p className="text-mm-dark text-lg">
              HR Interns report directly to the Director of Tutoring, helping manage the Tutoring Department, conducting outreach for events, and networking with professionals to form new connections.
            </p>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Event Coordination</h3>
            <p className="text-mm-dark text-lg">
              Event Coordination Interns report directly to the Director of Musical Hospice, forming relationships with organizations to host events with and brainstorming unique event ideas.
            </p>
          </div>
          <div className="bg-mm-blue p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-mm-dark mb-4">PR + Graphic Design</h3>
            <p className="text-mm-dark text-lg">
              PR + Graphic Design Interns work to run the social media accounts of Musical Memories, designing creative Instagram posts with Canva and staying on-trend with TikTok.
            </p>
          </div>
        </div>
        <a href="https://forms.gle/vR8uWrcyU4zfLac7A" rel="noreferrer" target="_blank">
          <button className="w-full mt-8 bg-mm-dark text-white font-semibold py-4 rounded-lg text-center">
            Apply to join Musical Memories!
          </button>
        </a>
      </section>

      <section id="chapters" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4 text-center md:text-left">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">Chapters</h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6 mb-4 md:mb-1">
            Want to do more than just participate? Start a chapter at your high school or town!
          </p>
          <a href="https://forms.gle/GK3emi6jP7DV21cm9" rel="noreferrer" target="_blank">
            <button className="bg-mm-dark text-white font-semibold py-3 px-6 rounded-lg">
              Apply Here!
            </button>
          </a>
        </div>
      </section>

      <section id="tutoring" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4 text-center md:text-left">
        <div className="flex items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">Tutoring</h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6">
            Our Tutoring Department connects experienced high school and university musicians with younger students eager to learn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">All Levels</h3>
            <p className="text-mm-dark text-lg">
              Our tutoring program is designed to support students who are passionate about music. Whether you're just starting or already advanced, our tutors are here to guide you.
            </p>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Entirely Online</h3>
            <p className="text-mm-dark text-lg">
              All lessons are currently held online through Zoom and aim to prepare students for our performances, which you can check out below!
            </p>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Completely Free</h3>
            <p className="text-mm-dark text-lg">
              This program is completely free and conducted by volunteers. If you're an advanced musician looking for volunteering hours, sign up below to become a tutor!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <a href="https://forms.gle/E1rnjwGFkigSss1T6" rel="noreferrer" target="_blank" className="w-full block">
            <button 
              ref={(el) => (buttonRefs.current[0] = el)}
              className="bg-mm-dark rounded-[45px] p-10 border border-mm-dark shadow-[0_5px_0_0_#191A23] flex justify-between items-center relative overflow-hidden w-full"
            >
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 bg-white inline-block px-3 py-1 rounded-md">
                  Student Sign-Up
                </h3>
                <div className="flex items-center text-mm-gray font-semibold mt-6">
                  I want in
                  <span className="ml-2 bg-black rounded-full p-2 inline-flex items-center justify-center">
                    <svg
                      ref={(el) => (arrowRefs.current[0] = el)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
              <img src={Tutoring} alt="Student Sign-Up" className="h-40 w-40 object-contain" />
            </button>
          </a>
          <a href="https://forms.gle/E1rnjwGFkigSss1T6" rel="noreferrer" target="_blank" className="w-full block">
            <button 
              ref={(el) => (buttonRefs.current[1] = el)}
              className="bg-mm-blue rounded-[45px] p-10 border border-mm-dark shadow-[0_5px_0_0_#191A23] flex justify-between items-center relative overflow-hidden w-full"
            >
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 bg-white inline-block px-3 py-1 rounded-md">
                  Tutor Sign-Up
                </h3>
                <div className="flex items-center text-mm-dark font-semibold mt-6">
                  I want in
                  <span className="ml-2 bg-black rounded-full p-2 inline-flex items-center justify-center">
                    <svg
                      ref={(el) => (arrowRefs.current[1] = el)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
              <img src={Tutoring} alt="Tutor Sign-Up" className="h-40 w-40 object-contain" />
            </button>
          </a>
        </div>
      </section>

      <section id="performances" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4 text-center md:text-left">
        <div className="flex items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-3 md:mb-1">Performances</h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6">
            We conduct performances for a variety of causes, from professional recitals to dementia care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Goals</h3>
            <p className="text-mm-dark text-lg">
              Our performances aim to bring joy and therapeutic benefits to diverse audiences. We collaborate with talented musicians and organizations to create events that not only entertain but also make a difference in the lives of others. From giving young musicians a platform to showcase their talents to helping ease the minds of dementia care patients, we use the healing power of music to lift those around us.
            </p>
            <a href="https://forms.gle/v7uhB9ScBPoPYxbZ9" rel="noreferrer" target="_blank">
              <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg mt-4">
                Sign Up!
              </button>
            </a>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md flex justify-center items-center">
            <img src={Sunrise} alt="Sunrise" className="h-auto w-full object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <section id="workshops" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4 text-center md:text-left">
        <div className="flex items-center justify-between mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">Workshops</h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6">
            We're dedicated to bringing music to students of all backgrounds, helping refugees, underprivileged students, and more!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-mm-gray p-8 rounded-xl shadow-md flex justify-center items-center">
            <img src={Aslan} alt="Aslan" className="h-auto w-full object-cover rounded-lg" />
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">A Helping Hand</h3>
            <p className="text-mm-dark text-lg">
              At the center of our mission is bringing music to those without it, and there really is no better way than using workshops to teach. If you are an experienced student musician with a passion for passing on your skills, join us as we attempt to make music a universal language.
            </p>
            <a href="https://forms.gle/v7uhB9ScBPoPYxbZ9" rel="noreferrer" target="_blank">
              <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg mt-4">
                Sign Up!
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="competitions" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4 text-center md:text-left">
        <div className="flex items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">Competitions</h2>
          <p className="text-lg md:text-xl text-mm-dark md:ml-6">
            Have a competitive spirit? Check out these contests!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button className="bg-mm-dark p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-mm-gray mb-4">The Composition Challenge</h3>
            <p className="text-mm-gray text-lg">
              Compose, or improvise, a musical piece of your own. There are no genre or instrument restrictions, so enjoy the process! Your submission will be a video of you performing the piece, to be featured in a Musical Memories livestream.
              <br />
              <br />
              Team Size: Individual
              <br />
              Deadline: October 17
            </p>
          </button>
          <button className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Merch Mania</h3>
            <p className="text-mm-dark text-lg">
              Design a shirt. The only requirement is for it to be related to music, so get creative with it! The first place design will be featured in our merch store for a limited time.
              <br />
              <br />
              Team Size: Individual
              <br />
              Deadline: Coming Soon!
            </p>
          </button>
          <button className="bg-mm-blue p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Music for Scientific Good</h3>
            <p className="text-mm-dark text-lg">
              Research a novel way that music can be used to help patients battling dementia or other similar disorders. You will be submitting a short paper or presentation highlighting your study.
              <br /><br />
              Team Size: 1-4
              <br />
              Deadline: <span className="text-red-500">August 16</span>
            </p>
          </button>
        </div>
      </section>

      <section id="content" ref={sectionRef} className="max-w-7xl mx-auto py-2 px-4 text-center md:text-left">
        <div className="flex items-center justify-between mb-2 flex-col md:flex-row">
          <div className="flex items-center flex-col md:flex-row">
            <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">Content Creation</h2>
            <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-left mb-4 md:mb-1 text-center md:text-left">
              Want to reach as many people as possible? Write about music!
            </p>
          </div>
          <a href="https://forms.gle/ESDiL5QonzAzKWgN6" rel="noreferrer" target="_blank">
            <button className="bg-mm-dark text-white font-semibold py-3 px-6 rounded-lg">
              Join the team!
            </button>
          </a>
        </div>
      </section>

      <section id="app-dev" ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4 text-center md:text-left">
        <div className="flex items-center mb-8 flex-col md:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">App Dev</h2>
          <p className="text-lg md:text-xl text-mm-dark md:text-left md:ml-6">
            Like to code? We're always developing apps to help bring music to as many people as possible!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">English or Spanish?</h3>
            <p className="text-mm-dark text-lg">
              Listening to songs in other languages is usually fun, but what if you could hear the song in your native language, without any changes in rhythm or flow? That's exactly what we're trying to build!
            </p>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Therapy Tunes</h3>
            <p className="text-mm-dark text-lg">
              Have you ever been in need of a playlist to relax your thoughts, especially when you're stressed out? Well, we're working on something to help you when you're down!
            </p>
          </div>
          <div className="bg-mm-gray p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Coming Soon!</h3>
            <p className="text-mm-dark text-lg">
              We have a lot more in the works; join us to help bring new ideas to life!
            </p>
          </div>
        </div>
        <a href="https://forms.gle/ESDiL5QonzAzKWgN6" rel="noreferrer" target="_blank">
          <button className="w-full mt-8 bg-mm-dark text-white font-semibold py-4 rounded-lg text-center">
            Join our Dev Team and dive into our projects!
          </button>
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
