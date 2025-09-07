import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaNewspaper, FaRobot, FaTrophy, FaCode } from 'react-icons/fa';

export default function EventsNewsPage() {
  const events = [
    { title: 'Science Fair', date: 'June 15, 2025', description: 'Showcase your scientific innovations.' },
    { title: 'Parent-Teacher Conference', date: 'July 2, 2025', description: 'Discuss student progress.' },
    { title: 'Summer Coding Bootcamp', date: 'August 5, 2025', description: 'Learn coding and AI.' },
  ];

  const news = [
    { title: 'New Robotics Lab Launched', description: 'State-of-the-art robotics lab now open for all students!' },
    { title: 'National Girls in ICT Finalist', description: 'Our students are finalists in the National Girls in ICT competition!' },
    { title: 'On-site Bootcamp 2.0 Highlight', description: 'Students trained in STEAM, AI & ML, and Web Development.' },
  ];

  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEvent = () => setCurrentEvent((prev) => (prev + 1) % events.length);
  const prevEvent = () => setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);

  return (
    <div className="bg-gray-100">
      {/* SEO Meta Tags */}
      <header>
        <title>Events & News - Algorise Tech Explorers</title>
        <meta
          name="description"
          content="Stay updated with the latest events and news at Algorise Tech Explorers, including science fairs, coding bootcamps, and more."
        />
        <meta name="keywords" content="events, news, Algorise Tech Explorers, LMS, education, STEM" />
        <meta name="robots" content="index, follow" />
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & News</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Discover upcoming events and stay informed with the latest news from Algorise Tech Explorers.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">Upcoming Events</h2>
          <div className="relative mb-8">
            <div className="flex items-center justify-center">
              <button
                onClick={prevEvent}
                className="absolute left-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-200"
                aria-label="Previous event"
              >
                &larr;
              </button>
              <div className="text-center max-w-md mx-12">
                <h3 className="text-xl font-semibold text-gray-800">{events[currentEvent].title}</h3>
                <p className="text-gray-600">{events[currentEvent].date}</p>
                <p className="text-gray-600">{events[currentEvent].description}</p>
              </div>
              <button
                onClick={nextEvent}
                className="absolute right-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-200"
                aria-label="Next event"
              >
                &rarr;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <FaCalendarAlt className="text-indigo-600 text-2xl mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{event.date}</h3>
                <p className="text-gray-600">{event.title}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 text-center">News & Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaRobot className="text-indigo-600 text-2xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{news[0].title}</h3>
              <p className="text-gray-600">{news[0].description}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaTrophy className="text-indigo-600 text-2xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{news[1].title}</h3>
              <p className="text-gray-600">{news[1].description}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <FaCode className="text-indigo-600 text-2xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{news[2].title}</h3>
              <p className="text-gray-600">{news[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-8">
            Join our community and never miss an update or event.
          </p>
          <Link
            to="/contact"
            className="py-3 px-6 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-200"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}