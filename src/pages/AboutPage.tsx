import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookOpen, FaLightbulb, FaUsers, FaRocket, FaStar, FaCode, FaPalette } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutPage() {
  const timeline = [
    { year: '2024', event: 'Algorise Tech Explorers founded in Nigeria.' },
    { year: '2024', event: 'Launched first coding bootcamp for 49 teens.' },
    { year: '2025', event: 'Finalist National Girls in ICT Technology.' },
    { year: '2025', event: 'Expanded to include arts and leadership programs.' },
    { year: '2025', event: 'Organised and Trained 40-students in coding Bootcamp'}

  ];

  const testimonials = [
    {
      name: 'Sarah A.',
      role: 'Parent',
      quote: 'Algorise transformed my child’s confidence in STEM!',
    },
    {
      name: 'Dr. Michael Okon',
      role: 'Teacher',
      quote: 'An inspiring environment for innovation and collaboration.',
    },
    {
      name: 'Aisha B.',
      role: 'Student',
      quote: 'The coding bootcamp opened doors to my tech career.',
    },
  ];

  const team = [
    {
      name: 'Dr. Jane Smith',
      role: 'Director of Education',
      image: '/images/team/jane-smith.jpg',
    },
    {
      name: 'Prof. John Doe',
      role: 'Head of STEM Programs',
      image: '/images/team/john-doe.jpg',
    },
    {
      name: 'Ms. Emily Brown',
      role: 'Student Advisor',
      image: '/images/team/emily-brown.jpg',
    },
  ];

  const programs = [
    {
      title: 'Coding Bootcamps',
      description: 'Hands-on training in programming, AI, and web development.',
      icon: <FaCode className="text-indigo-600 text-3xl mb-4 mx-auto" />,
    },
    {
      title: 'Arts Workshops',
      description: 'Creative programs blending technology and artistic expression.',
      icon: <FaPalette className="text-indigo-600 text-3xl mb-4 mx-auto" />,
    },
    {
      title: 'Leadership Training',
      description: 'Empowering students to lead with confidence and vision.',
      icon: <FaRocket className="text-indigo-600 text-3xl mb-4 mx-auto" />,
    },
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-gray-100">
      {/* SEO Meta Tags */}
      <header>
        <title>About Us - Algorise Tech Explorers</title>
        <meta
          name="description"
          content="Discover Algorise Tech Explorers' mission to empower young innovators through STEM, arts, and leadership education in Nigeria."
        />
        <meta
          name="keywords"
          content="Algorise Tech Explorers, LMS, education, STEM, arts, leadership, innovation, Nigeria, coding bootcamps"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Algorise Tech Explorers" />
        <meta
          property="og:description"
          content="Empowering the next generation through innovative STEM, arts, and leadership education in Nigeria."
        />
        <meta property="og:image" content="/images/ATE-img-logo.jpg" />
        <meta property="og:url" content="https://www.algorisetech.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Algorise Tech Explorers',
            url: 'https://www.algorisetech.com',
            logo: '/images/ATE-img-logo.jpg',
            description:
              'Algorise Tech Explorers empowers the next generation through innovative STEM, arts, and leadership education.',
          })}
        </script>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Shaping Tomorrow’s Innovators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
          >
            At Algorise Tech Explorers, we blend STEM, arts, and leadership to inspire young minds to create, innovate, and lead with purpose.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/contact"
              className="py-3 px-6 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-200 focus:ring-2 focus:ring-indigo-500"
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
            <Link
              to="/admission"
              className="py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 focus:ring-2 focus:ring-indigo-500"
              aria-label="Apply for Admission"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            Our Story
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gray-600 mb-4">
                Founded in 2018, Algorise Tech Explorers emerged from a vision to revolutionize education in Nigeria by integrating STEM, arts, and leadership. Our mission is to nurture young innovators who can tackle global challenges with creativity and confidence.
              </p>
              <p className="text-gray-600 mb-4">
                From humble beginnings, we’ve grown into a beacon of innovation, hosting coding bootcamps, arts workshops, and leadership programs. Our students have excelled in national competitions, including the National Girls in ICT and STEM Innovation Awards.
              </p>
              <p className="text-gray-600">
                Today, Algorise Tech Explorers continues to inspire, with state-of-the-art facilities like our robotics lab and a commitment to fostering a supportive community for all learners.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/images/about-story.jpg"
                alt="Students collaborating at Algorise Tech Explorers"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
                onError={() => console.error('Failed to load about story image')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative mb-8 flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                >
                  <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-indigo-900">{item.year}</h3>
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Highlight Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            Our Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                {program.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-8"
          >
            <Link
              to="/academics"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 focus:ring-2 focus:ring-indigo-500"
              aria-label="Explore Our Programs"
            >
              Explore All Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
            >
              <FaLightbulb className="text-indigo-600 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We inspire creative problem-solving and cutting-edge thinking in all our programs, encouraging students to push boundaries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
            >
              <FaUsers className="text-indigo-600 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">
                We foster a collaborative environment where every student feels valued and supported in their learning journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
            >
              <FaRocket className="text-indigo-600 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership</h3>
              <p className="text-gray-600">
                We empower students to lead with confidence, integrity, and a commitment to positive change in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            Our Vision & Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be a global leader in transformative education, inspiring a generation of innovators who shape a sustainable future.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Impact</h3>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Over 1,000 students trained in STEM and arts programs.</li>
                <li>50+ national and international awards won by our students.</li>
                <li>Partnerships with leading tech organizations in Nigeria.</li>
                <li>Community outreach programs impacting 5,000+ lives.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="/images/impact.jpg"
                alt="Impact of Algorise Tech Explorers programs"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
                onError={() => console.error('Failed to load impact image')}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-8"
          >
            Meet the passionate educators and innovators driving Algorise Tech Explorers.
          </motion.p>
          <Slider {...slickSettings}>
            {team.map((member, index) => (
              <div key={index} className="px-2">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                    onError={() => console.error(`Failed to load team image: ${member.name}`)}
                  />
                  <h3 className="text-lg font-semibold text鑑
                    text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-6 text-center"
          >
            What Our Community Says
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <FaStar className="text-indigo-600 text-2xl mb-4 mx-auto" />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="font-semibold text-indigo-900">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Join Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Discover how Algorise Tech Explorers can shape your future through innovative education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Link
              to="/academics"
              className="py-3 px-6 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-200 focus:ring-2 focus:ring-indigo-500"
              aria-label="Explore Academics"
            >
              Explore Academics
            </Link>
            <Link
              to="/admission"
              className="py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 focus:ring-2 focus:ring-indigo-500"
              aria-label="Apply for Admission"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}