import React, { useRef } from 'react';
import Tutoring from '../assets/images/tutoring.svg';
import Helping from '../assets/images/helping.svg';

const GetInvolved = () => {
  const sectionRef = useRef(null);

  return (
    <div className="bg-white">
        <main className="flex justify-between items-start py-16 max-w-7xl mx-auto px-4">
          <div className="max-w-xl mt-16">
            <h1 className="text-6xl mb-12 text-mm-dark">Get Involved</h1>
            <p className="text-xl text-mm-dark mb-12">
              Explore the different ways you can contribute to our mission and sign up to make a difference!
            </p>
            <button className="px-8 py-4 bg-mm-dark text-white font-semibold rounded-xl">
              Join us
            </button>
          </div>
          <div className="pt-20 self-end">
            <img src={Helping} alt="People holding hands" className="h-4x1" />
          </div>
        </main>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Internships</h2>
            <p className="text-xl text-mm-dark ml-6">
              Like our mission and want to help out? Join one of our internship teams!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <a href="https://forms.gle/vR8uWrcyU4zfLac7A" target="_blank">
            <button className="w-full mt-8 bg-mm-dark text-white font-semibold py-4 rounded-lg text-center">
              Apply to join Musical Memories!
            </button>
          </a>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Chapters</h2>
            <p className="text-xl text-mm-dark ml-6">
              Want to do more than just pariticipate? Form a chapter at your high school or town!
            </p>
          </div>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Tutoring</h2>
            <p className="text-xl text-mm-dark ml-6">
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
            <button className="bg-mm-dark rounded-[45px] p-10 border border-mm-dark shadow-[0_5px_0_0_#191A23] flex justify-between items-center relative overflow-hidden">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 bg-white inline-block px-3 py-1 rounded-md">
                  Student Sign-Up
                </h3>
                <div className="flex items-center text-mm-gray font-semibold mt-6">
                  I want in
                  <span className="ml-2 bg-black rounded-full p-2 inline-flex items-center justify-center">
                    <svg
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
            <button className="bg-mm-blue rounded-[45px] p-10 border border-mm-dark shadow-[0_5px_0_0_#191A23] flex justify-between items-center relative overflow-hidden">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 bg-white inline-block px-3 py-1 rounded-md">
                  Tutor Sign-Up
                </h3>
                <div className="flex items-center text-mm-dark font-semibold mt-6">
                  I want in
                  <span className="ml-2 bg-black rounded-full p-2 inline-flex items-center justify-center">
                    <svg
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
          </div>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Performances</h2>
            <p className="text-xl text-mm-dark ml-6">
              We conduct performances for a variety of causes, from professional recitals to dementia care.
            </p>
          </div>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Workshops</h2>
            <p className="text-xl text-mm-dark ml-6">
              We're dedicated to bringing music to students of all backgrounds, helping refugees, underprivileged students, and more!
            </p>
          </div>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Competitions</h2>
            <p className="text-xl text-mm-dark ml-6">
              Have a competitive spirit? Check out these contests!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button className="bg-mm-dark p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-mm-gray mb-4">The Composition Challenge</h3>
              <p className="text-mm-gray text-lg">
              Compose, or improvise, a musical piece of your own. There are no genre or instrument restrictions, so enjoy the process! Your submission will be a video of you performing the piece, to be featured in a Musical Memories livestream on [insert date]
              <br></br>
              <br></br>
              Team Size: Individual
              <br></br>
              Deadline: [insert date here]
              </p>
            </button>
            <button className="bg-mm-gray p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Merch Mania</h3>
              <p className="text-mm-dark text-lg">
                Design a shirt. The only requirement is for it to be related to music, so get creative with it! The first place design will be featured in our merch store for a limited time.
                <br></br>
                <br></br>
                Team Size: Individual
                <br></br>
                Deadline: [insert date here]
              </p>
            </button>
            <button className="bg-mm-blue p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Music for Scientific Good</h3>
              <p className="text-mm-dark text-lg">
              Research a novel way that music can be used to help patients battling dementia or other similar disorders. You will be submitting a short paper or presentation highlighting your study.
              <br></br><br></br>
              Team Size: 1-4
              <br></br>
              Deadline: <span className="text-red-500">August 16</span>
              </p>
            </button>
          </div>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-2 px-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">Content Creation</h2>
              <p className="text-xl text-mm-dark ml-6 text-left">
                Want to reach as many people as possible? Write about music!
              </p>
            </div>
            <button className="bg-mm-dark text-white font-semibold py-3 px-6 rounded-lg">
              Join the team!
            </button>
          </div>
        </section>
        <section ref={sectionRef} className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg">App Dev</h2>
            <p className="text-xl text-mm-dark text-left ml-6">
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
              <h3 className="text-2xl font-semibold mb-4">App 2</h3>
              <p className="text-mm-dark text-lg">
                App description
              </p>
            </div>
            <div className="bg-mm-gray p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-4">App 3</h3>
              <p className="text-mm-dark text-lg">
              App description
              </p>
            </div>
          </div>
          <button className="w-full mt-8 bg-mm-dark text-white font-semibold py-4 rounded-lg text-center">
            Join our Dev Team and dive into our projects!
          </button>
        </section>
    </div>
  );
}

export default GetInvolved;