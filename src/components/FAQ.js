import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FAQItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  const plusMinusRef = useRef(null);

  useEffect(() => {
    if (answerRef.current) {
      gsap.set(answerRef.current, { height: 0, opacity: 0 });
    }
  }, []);

  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
        gsap.to(plusMinusRef.current, {
          rotation: 180,
          duration: 0.3,
        });
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
        });
        gsap.to(plusMinusRef.current, {
          rotation: 0,
          duration: 0.3,
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="mb-6 rounded-[45px] border border-mm-dark bg-mm-blue shadow-[0_5px_0_0_#191A23]">
      <button
        className="w-full text-left p-4 sm:p-8 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-2xl sm:text-4xl font-bold mr-3 sm:mr-6 text-mm-dark">{number.toString().padStart(2, '0')}</span>
          <span className="text-lg sm:text-2xl font-medium text-mm-dark">{question}</span>
        </div>
        <span ref={plusMinusRef} className="text-4xl sm:text-6xl text-mm-dark transition-transform duration-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div ref={answerRef} className="overflow-hidden">
        <div className="px-4 sm:px-8 pb-4 sm:pb-8">
          <p className="text-mm-dark ml-9 sm:ml-16 text-base sm:text-xl">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How do I sign up?",
      answer: "Easy! Click the Get Involved button in the menu bar. Here, you will find links to all of the positions we offer at Musical Memories!"
    },
    {
      question: "Are you all students?",
      answer: "Yes, we are primarily a student-run organization, but we welcome participation from music enthusiasts of all ages and backgrounds."
    },
    {
      question: "Where are you based?",
      answer: "We are a global organization with members from various locations, but our primary operations are based in New Jersey."
    },
    {
      question: "Do I need to be a certain age to participate?",
      answer: "Nope! We encourage people of any age to participate in our cause."
    },
    {
      question: "How can I donate to this cause?",
      answer: "We appreciate your support! You can donate through our website by clicking on the 'Donate' button in the navigation menu, or by contacting our team directly for other donation options."
    },
    {
      question: "What type of organization is this?",
      answer: "Musical Memories is a non-profit organization dedicated to spreading the joy of music through education, performance, and community engagement."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-8 sm:py-16 px-4">
      <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-6 text-mm-dark">Frequently Answered Questions</h2>
      <p className="text-xl sm:text-2xl text-mm-dark mb-6 sm:mb-12">Answers to all of your questions about Musical Memories!</p>
      <div className="space-y-4 sm:space-y-6">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            number={index + 1}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;