import { FaBullhorn, FaCalendarAlt, FaExternalLinkAlt, FaClock } from 'react-icons/fa';

const events = [
  {
    title: "STEM Bootcamp 2025",
    date: "July 10–20, 2025",
    location: "Tech Hub, Jos",
    link: "#",
    image: "/images/event1.jpg",
    type: "Bootcamp",
    status: "Upcoming"
  },
  {
    title: "Girls in ICT Innovation Day",
    date: "August 5, 2025",
    location: "Algorise HQ",
    link: "#",
    image: "/images/event2.jpg",
    type: "Conference",
    status: "Upcoming"
  },
  {
    title: "Online Workshop: Scratch for Kids",
    date: "June 25, 2025",
    location: "Zoom",
    link: "#",
    image: "/images/event3.jpg",
    type: "Webinar",
    status: "Past"
  },
];

export default function EventsNewsSection() {
  return (
    <section className="bg-white px-6 py-12 rounded-2xl shadow-md max-w-7xl mx-auto my-12 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4">
        <FaBullhorn className="text-orange-500 text-3xl" />
        <h2 className="text-3xl font-bold text-gray-800">Events & News</h2>
      </div>

      {/* Intro */}
      <p className="flex items-center gap-3 text-gray-600 text-lg">
        <FaCalendarAlt className="text-blue-500" />
        Get the latest from <strong className="text-blue-700">Algorise Tech Explorers</strong>—our events, announcements, and highlights.
      </p>

      {/* Events Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-50 hover:bg-white transition rounded-xl overflow-hidden shadow group"
          >
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white bg-blue-500 px-2 py-0.5 rounded-full">
                  {event.type}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    event.status === "Upcoming"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {event.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <div className="text-sm text-gray-600">
                <p className="flex items-center gap-1">
                  <FaClock className="text-yellow-500" />
                  {event.date}
                </p>
                <p>{event.location}</p>
              </div>
              <a
                href={event.link}
                className="inline-flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
              >
                Learn more <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-700 text-lg mb-4">
          Want to stay in the loop with all our upcoming events?
        </p>
        <a
          href="/subscribe"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Subscribe to Our Newsletter
        </a>
      </div>
    </section>
  );
}
