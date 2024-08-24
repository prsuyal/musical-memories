import React from 'react';

const EventColumn = ({ title, date, time, description, ctaText, isDisabled = false }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-3xl font-bold mb-4 text-mm-blue h-16">{title}</h3>
    <p className="text-2xl font-bold mb-2 h-8">{date}</p>
    <p className="text-xl mb-4 h-8">{time}</p>
    <p className="mb-4 flex-grow">{description}</p>
    {isDisabled ? (
      <p className="text-gray-400 mt-auto">{ctaText}</p>
    ) : (
      <a href="#" className="text-mm-blue hover:underline mt-auto">{ctaText} →</a>
    )}
  </div>
);

const UpcomingEvents = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold bg-mm-blue px-4 py-2 rounded-lg">
          Upcoming Events
        </h2>
        <p className="text-xl text-mm-dark">What are we up to these days?</p>
      </div>

      <div className="bg-mm-dark rounded-3xl p-8">
        <div className="grid grid-cols-3 gap-8 text-white">
          <EventColumn 
            title="NYC Kaufman Music Event"
            date="August 30"
            time="6-8 PM"
            description="Join us for an enchanting evening at the Kaufman Music Center's Ann Goodman Recital Hall. Experience captivating performances and inspiring talks from renowned artists."
            ctaText="Sign-ups Closed"
            isDisabled={true}
          />
          <EventColumn 
            title="Virtual Music Competition"
            date="Aug 17 - Oct 17"
            time=""
            description="Showcase your talent in our international competition! Perform or compose a piece and get evaluated by world-renowned mentors. Open to all skill levels and genres. Submit via the second link in our Linktree."
            ctaText="Sign up"
          />
          <EventColumn 
            title="Coming Soon..."
            date="Stay Tuned!"
            time=""
            description="We're cooking up something exciting! More events and opportunities are on the horizon. Be the first to know about our upcoming musical adventures."
            ctaText="Sign up"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;