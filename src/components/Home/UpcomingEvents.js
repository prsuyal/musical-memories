import React, { useState, useRef, useEffect } from "react";

const EventCardDesktop = ({
  title,
  date,
  time,
  description,
  ctaText,
  ctaLink,
  isDisabled = false,
}) => (
  <div className="flex flex-col h-full bg-mm-dark rounded-2xl p-6 text-white">
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-mm-blue">
      {title}
    </h3>
    <p className="text-xl md:text-2xl font-bold mb-2">{date}</p>
    <p className="text-lg md:text-xl mb-4">{time}</p>
    <p className="mb-4 flex-grow">{description}</p>
    {isDisabled ? (
      <p className="text-gray-400 mt-auto">{ctaText}</p>
    ) : (
      <a
        href={ctaLink}
        className="text-mm-blue hover:underline mt-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaText} →
      </a>
    )}
  </div>
);

const EventCardMobile = ({
  title,
  date,
  time,
  ctaText,
  ctaLink,
  isDisabled = false,
}) => (
  <div className="flex flex-col bg-mm-dark rounded-2xl p-4 text-white">
    <h3 className="text-xl font-bold mb-2 text-mm-blue">{title}</h3>
    <p className="text-lg font-bold mb-1">{date}</p>
    <p className="text-md mb-2">{time}</p>
    {isDisabled ? (
      <p className="text-gray-400 text-sm mt-auto">{ctaText}</p>
    ) : (
      <a
        href={ctaLink}
        className="text-mm-blue hover:underline text-sm mt-auto"
        target="_blank"
        rel="noopener noreferrer"
      >
        {ctaText} →
      </a>
    )}
  </div>
);

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const containerRef = useRef(null);

  const events = [
    {
      title: "NYC Kaufman Music Event",
      date: "August 30",
      time: "6-8 PM",
      description:
        "Join us for an enchanting evening at the Kaufman Music Center's Ann Goodman Recital Hall. Experience captivating performances and inspiring talks from renowned artists.",
      ctaText: "Sign-ups Closed",
      isDisabled: true,
    },
    {
      title: "Virtual Music Competition",
      date: "Aug 17 - Oct 17",
      time: "",
      description:
        "Showcase your talent in our international competition! Perform or compose a piece and get evaluated by world-renowned mentors. Open to all skill levels and genres. Submit via the second link in our Linktree.",
      ctaText: "Sign up",
      ctaLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeATaamZsgcEnsmwqS8X3_AGrxWm46culJ4mbKskECFlgkqhQ/viewform",
    },
    {
      title: "FODfest",
      date: "Stay Tuned!",
      time: "",
      description:
        "We're cooking up something exciting! A special event is coming your way soon. Stay tuned",
      ctaText: "Sign up soon",
      isDisabled: true,
    },
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < events.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
      touchStartX.current = null;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="max-w-7xl mx-auto py-8 md:py-16 px-4">
      <div className="flex items-center mb-8 flex-col md:flex-row">
        <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">
          Upcoming Events
        </h2>
        <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-center md:text-left">
          What are we up to these days?
        </p>
      </div>

      <div className="bg-mm-dark rounded-3xl p-4 md:p-8">
        <div className="hidden md:grid md:grid-cols-3 gap-8 text-white">
          {events.map((event, index) => (
            <EventCardDesktop key={index} {...event} />
          ))}
        </div>

        <div className="md:hidden">
          <div
            className="overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              ref={containerRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{ width: `${events.length * 100}%` }}
            >
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <EventCardMobile {...event} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {events.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentIndex ? "bg-mm-blue" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;