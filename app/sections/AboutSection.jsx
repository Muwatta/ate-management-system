import { FaUsers, FaLightbulb, FaGraduationCap, FaHandsHelping, FaUsersCog, FaBullseye } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-10 rounded-2xl shadow-md max-w-5xl mx-auto my-12 space-y-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 border-b pb-4">
        <FaUsers className="text-blue-600 text-3xl" />
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed">
        We are a community of educators, technologists, and innovators dedicated to nurturing young minds. 
        Our school provides an inclusive and empowering environment where learners develop the skills, mindset, and creativity needed for tomorrow's world.
      </p>

      {/* Mission Highlight */}
      <div className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg shadow-sm">
        <FaLightbulb className="text-yellow-500 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Our Mission</h3>
          <p className="text-gray-600 text-base">
            To deliver high-quality, future-ready education that equips students with the tools to thrive in the tech-driven global landscape.
          </p>
        </div>
      </div>

      {/* Vision / Unique Proposition */}
      <div className="flex items-start gap-4 bg-green-50 p-6 rounded-lg shadow-sm">
        <FaGraduationCap className="text-green-600 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">What Sets Us Apart</h3>
          <p className="text-gray-600 text-base">
            From hands-on coding projects to real-world innovation challenges, we create learning experiences that inspire curiosity and critical thinking.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="flex items-start gap-4 bg-purple-50 p-6 rounded-lg shadow-sm">
        <FaBullseye className="text-purple-600 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Core Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Integrity and Respect</li>
            <li>Innovation and Curiosity</li>
            <li>Collaboration and Community</li>
            <li>Excellence and Growth</li>
          </ul>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex items-start gap-4 bg-yellow-50 p-6 rounded-lg shadow-sm">
        <FaUsersCog className="text-yellow-700 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Our Team</h3>
          <p className="text-gray-600 text-base">
            Experienced educators, passionate developers, and industry experts committed to guiding each learner’s journey.
          </p>
        </div>
      </div>

      {/* Community Impact */}
      <div className="flex items-start gap-4 bg-teal-50 p-6 rounded-lg shadow-sm">
        <FaHandsHelping className="text-teal-600 text-3xl mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Community Impact</h3>
          <p className="text-gray-600 text-base">
            Empowering hundreds of young learners annually, fostering innovation hubs, and supporting local tech ecosystems.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-6">
        <a
          href="/join-us"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Join Our Community
        </a>
      </div>
    </section>
  );
}
