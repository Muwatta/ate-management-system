import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Loader2, BookOpen, Mail, Calendar, Megaphone, ArrowRight, Phone, Users } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Card from '@/components/Card';
import Button from '@/components/Button';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEvents([
        {
          title: 'Science Fair',
          date: 'June 15, 2025',
          description: 'Showcase your scientific innovations.',
          image: 'https://res.cloudinary.com/dee5edoss/image/upload/v1748055293/IMG-20250417-WA0009_u0hipk.jpg',
        },
        {
          title: 'Parent-Teacher Conference',
          date: 'July 2, 2025',
          description: 'Discuss student progress.',
          image: 'https://res.cloudinary.com/dee5edoss/image/upload/v1749409016/myGirls_wxk3zr.jpg',
        },
        {
          title: 'Summer Coding Bootcamp',
          date: 'August 5, 2025',
          description: 'Learn coding and AI.',
          image: 'https://res.cloudinary.com/dee5edoss/image/upload/v1741630750/IMG_20241219_104415_645_-1374329958_kgpgos.jpg',
        },
      ]);
      setNews([
        {
          title: 'New Robotics Lab Launched',
          description: 'State-of-the-art robotics lab now open for all students!',
          image: '/images/roboticLab.png',
        },
        {
          title: 'National Girls in ICT Finalist',
          description: 'Our students are finalists in the National Girls in ICT competition!',
          image: '/images/N-ICT.jpg',
        },
        {
          title: 'On-site Bootcamp 2.0 Highlight',
          description: 'Students trained in STEAM, AI & ML, and Web Development.',
          image: '/images/002.jpg',
        },
      ]);
      setTestimonials([
        {
          name: 'Sarah A.',
          role: 'Parent',
          quote: 'Algorise Tech Explorers transformed my child’s confidence in STEM!',
        },
        {
          name: 'Dr. Michael Okon',
          role: 'Teacher',
          quote: 'An inspiring environment that fosters innovation and collaboration.',
        },
        {
          name: 'Aisha B.',
          role: 'Student',
          quote: 'The coding bootcamp was a game-changer for my career aspirations.',
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="slick-prev bg-teal-600 text-white p-2 rounded-full" aria-label="Previous slide">←</button>,
    nextArrow: <button className="slick-next bg-teal-600 text-white p-2 rounded-full" aria-label="Next slide">→</button>,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="flex-1 bg-gray-50">
      <Toaster position="top-right" />
      {/* SEO Meta Tags */}
      <header>
        <title>Algorise Tech Explorers - Empowering Innovators</title>
        <meta name="description" content="Algorise Tech Explorers empowers the next generation through STEM, arts, and leadership education." />
        <meta name="keywords" content="Algorise Tech Explorers, LMS, education, STEM, arts, leadership, coding, Nigeria" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Algorise Tech Explorers - Home" />
        <meta property="og:description" content="Empowering the next generation through innovative STEM, arts, and leadership education." />
        <meta property="og:image" content="/images/ATE-img-logo.jpg" />
        <meta property="og:url" content="https://www.algorisetech.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Algorise Tech Explorers',
            url: 'https://www.algorisetech.com',
            logo: '/images/ATE-img-logo.jpg',
            description: 'Algorise Tech Explorers empowers the next generation through innovative STEM, arts, and leadership education.',
          })}
        </script>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl w-full md:pr-8 flex flex-col gap-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold flex items-center gap-2">
              <BookOpen className="h-8 w-8" /> Welcome to Algorise Tech Explorers
            </h1>
            <p className="text-lg md:text-xl text-cyan-100">
              Unleashing creativity and innovation through cutting-edge STEM, arts, and leadership programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button to="/admission" ariaLabel="Apply for Admission" icon={BookOpen} variant="primary">
                Apply for Admission
              </Button>
              <Button to="/contact" ariaLabel="Contact Us" icon={Mail} variant="secondary">
                Contact Us
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <img
              src="https://res.cloudinary.com/dee5edoss/image/upload/v1739290847/Hassana-others_znwnly.jpg"
              alt="Students innovating at Algorise Tech Explorers"
              className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
              loading="lazy"
              onError={() => console.error('Failed to load hero image')}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="text-teal-600 h-6 w-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Algorise Tech Explorers</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            We inspire innovation, critical thinking, and leadership through a dynamic blend of STEM, arts, and leadership education.
          </p>
          <Button to="/about" ariaLabel="Learn more about Algorise Tech Explorers" icon={ArrowRight} variant="gradient">
            Learn More
          </Button>
        </div>
      </motion.section>

      {/* Academics Snapshot */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            {isLoading ? (
              <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full"></div>
            ) : (
              <img
                src="/images/Ejura.jpg"
                alt="Academic excellence at Algorise Tech Explorers"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
                onError={() => console.error('Failed to load academics image')}
              />
            )}
          </motion.div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <BookOpen className="text-teal-600 h-6 w-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Academic Excellence</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Our innovative curriculum blends STEM, arts, and leadership, empowering students to excel in competitions.
            </p>
            <Button to="/academics" ariaLabel="Explore academic programs" icon={ArrowRight} variant="gradient">
              Explore Academics
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Events Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-600 to-blue-500 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6 text-center justify-center">
            <Calendar className="text-cyan-100 h-6 w-6" />
            <h2 className="text-3xl sm:text-4xl font-bold">Upcoming Events</h2>
          </div>
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
                </div>
              ))}
            </div>
          ) : (
            <Slider {...slickSettings}>
              {events.map((event, index) => (
                <div key={index} className="px-2">
                  <div className="relative bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-200">
                    <img
                      src={event.image}
                      alt={`${event.title} at Algorise Tech Explorers`}
                      className="rounded-t-lg object-cover h-64 w-full"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </motion.section>

      {/* News Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6 text-center justify-center">
            <Megaphone className="text-teal-600 h-6 w-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">News & Announcements</h2>
          </div>
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  icon={Megaphone}
                  variant="bordered"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg mb-4 object-cover h-48 w-full"
                    loading="lazy"
                    onError={() => console.error(`Failed to load news image: ${item.title}`)}
                  />
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Button to="/events-news" ariaLabel="View more news and announcements" icon={ArrowRight} variant="gradient">
              More News
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Users className="text-teal-600 h-6 w-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Community Says</h2>
          </div>
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 rounded-lg h-64 w-full flex items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-teal-600" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  title={testimonial.name}
                  icon={Users}
                  variant="default"
                >
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <p className="text-gray-500 text-sm mt-2">{testimonial.role}</p>
                </Card>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-teal-600 to-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="text-cyan-100 h-6 w-6" />
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Join Us?</h2>
          </div>
          <p className="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
            Discover how Algorise Tech Explorers can unlock your potential through innovative education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/admission" ariaLabel="Apply for Admission" icon={BookOpen} variant="primary">
              Apply for Admission
            </Button>
            <Button to="/contact" ariaLabel="Contact Us" icon={Phone} variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
