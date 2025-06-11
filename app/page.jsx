'use client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaEnvelope, FaBookOpen, FaCalendarAlt, FaBullhorn, FaArrowRight, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50 min-h-screen">
        {/* Hero Section with Image (Text left, Image right) */}
        <section
          className="relative bg-gradient-to-r from-blue-100 to-blue-200 py-8 px-2 sm:py-12 sm:px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left"
        >
          {/* Animated Text */}
          <div className="max-w-xl w-full md:pr-12 flex flex-col gap-4">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold flex items-center gap-2"
            >
              
              Welcome to Algorise Tech Explorers
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex justify-center"
            >
              <div
                className="bg-orange-100 rounded-xl px-6 py-4 w-full text-center shadow-md text-lg font-semibold text-orange-900 flex items-center justify-center gap-2"
              >
                <FaBullhorn className="inline text-orange-400" />
                Empowering the next generation of innovators
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
            >
              <Link href="/admission" className="bg-green-900 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition flex items-center gap-2">
                <FaBookOpen />
                Apply for Admission
              </Link>
              <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition flex items-center gap-2">
                <FaEnvelope />
                Contact Us
              </Link>
            </motion.div>
          </div>
          {/* Wider Image */}
          <div className="w-full md:w-[520px] flex-shrink-0 mt-8 md:mt-0 flex justify-center">
            <img
              src="https://res.cloudinary.com/dee5edoss/image/upload/v1741465823/IMG-20241230-WA0032_hzmxke.jpg"
              alt="School Hero"
              className="rounded-xl shadow-lg w-full max-w-md max-h-96 object-cover"
            />
          </div>
        </section>

        {/* Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500 to-blue-400 py-8 px-2 sm:py-12 sm:px-4"
        >
          <div className="max-w-md sm:max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-white text-xl font-semibold">
              <FaCalendarAlt className="text-orange-200" />
              <span>Events Carousel</span>
            </div>
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              showStatus={false}
              className="rounded-xl shadow"
            >
              <div>
                <img src="https://res.cloudinary.com/dee5edoss/image/upload/v1748055293/IMG-20250417-WA0009_u0hipk.jpg" alt="Event 1" className="rounded-xl object-cover h-56 sm:h-80 w-full" />
                <p className="legend">Pitching ideas</p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dee5edoss/image/upload/v1749409016/myGirls_wxk3zr.jpg" alt="Event 2" className="rounded-xl object-cover h-56 sm:h-80 w-full" />
                <p className="legend">Presentation at the National level in Abuja</p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/dee5edoss/image/upload/v1741630750/IMG_20241219_104415_645_-1374329958_kgpgos.jpg" alt="Event 3" className="rounded-xl object-cover h-56 sm:h-80 w-full" />
                <p className="legend">Coding Bootcamp'24</p>
              </div>
            </Carousel>
          </div>
        </motion.section>

        {/* About Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-400 to-blue-350 py-8 px-2 sm:py-12 sm:px-4 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaBookOpen className="text-orange-400 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-400">About Algorise Tech Explorers</h2>
            </div>
            <p className="mb-6 text-base sm:text-lg text-blue-100">
              Algorise Tech Explorers is dedicated to nurturing innovation, critical thinking, and leadership in every student. Our mission is to empower the next generation of innovators through a robust curriculum and supportive environment.
            </p>
            <Link href="/about" className="inline-block bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition flex items-center gap-2">
              <FaArrowRight />
              Learn more about us
            </Link>
          </div>
        </motion.section>

        {/* Academics Snapshot */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-400 to-blue-300 py-8 px-2 sm:py-12 sm:px-4"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <img
              src="/images/Ejura.jpg"
              alt="Academics"
              className="rounded-xl shadow-lg w-full md:w-1/2 object-cover h-44 sm:h-64"
            />
            <div className="text-center md:text-left md:w-1/2">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <FaBookOpen className="text-orange-400 text-2xl" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-400">Academic Excellence</h2>
              </div>
              <p className="mb-6 text-base sm:text-lg text-blue-100">
                Our curriculum blends STEM, arts, and leadership, producing top achievers in national and international competitions. We celebrate our students’ successes and foster a love for lifelong learning.
              </p>
              <Link href="/academics" className="inline-block bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition flex items-center gap-2">
                <FaArrowRight />
                Explore our academics
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-400 to-blue-300 py-8 px-2 sm:py-12 sm:px-4"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <FaCalendarAlt className="text-orange-400 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-800">Upcoming Events</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row items-center justify-between bg-blue-300 rounded-lg px-4 sm:px-6 py-3 shadow">
                <span className="font-semibold text-orange-200 flex items-center gap-2"><FaCalendarAlt />June 15</span>
                <span className="font-semibold text-blue-100">Science Fair</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-between bg-blue-300 rounded-lg px-4 sm:px-6 py-3 shadow">
                <span className="font-semibold text-orange-200 flex items-center gap-2"><FaCalendarAlt />July 2</span>
                <span className="font-semibold text-blue-100">Parent-Teacher Conference</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-between bg-blue-300  rounded-lg px-4 sm:px-6 py-3 shadow">
                <span className="font-semibold text-orange-200 flex items-center gap-2"><FaCalendarAlt />August 5</span>
                <span className="font-semibold text-blue-100">Summer Coding Bootcamp</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* News Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-350 to-blue-300 py-8 px-2 sm:py-12 sm:px-4"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <FaBullhorn className="text-orange-400 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-400">News & Announcements</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-5 bg-blue-400 rounded-xl shadow hover:shadow-lg transition">
                <img src="/images/roboticLab.png" alt="News 1" className="rounded-lg mb-3 object-cover h-32 w-full" />
                <h3 className="font-bold mb-2 text-orange-200 flex items-center gap-2"><FaBullhorn />New Robotics Lab Launched</h3>
                <p className="text-blue-100">We are excited to announce the opening of our state-of-the-art robotics lab for all students!</p>
              </div>
              <div className="p-5 bg-blue-400 rounded-xl shadow hover:shadow-lg transition">
                <img src="/images/N-ICT.jpg" alt="News 2" className="rounded-lg mb-3 object-cover h-32 w-full" />
                <h3 className="font-bold mb-2 text-orange-200 flex items-center gap-2"><FaBullhorn />National Girls in ICT Finalist</h3>
                <p className="text-blue-100">We are proud to announce that our students have been recognized as finalists in the National Girls in ICT competition!</p>
              </div>
            </div>
            <Link href="/events-news" className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition flex items-center gap-2">
              <FaArrowRight />
              More news
            </Link>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="bg-gradient-to-r from-orange-400 to-orange-200 py-8 px-2 sm:py-12 sm:px-4 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaUserGraduate className="text-blue-450 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-450">Ready to Join Us?</h2>
            </div>
            <p className="mb-6 text-base sm:text-lg text-blue-450">
              Discover how Algorise Tech Explorers can help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/admission" className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-orange-600 transition flex items-center gap-2">
                <FaBookOpen />
                Apply for Admission
              </Link>
              <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition flex items-center gap-2">
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}