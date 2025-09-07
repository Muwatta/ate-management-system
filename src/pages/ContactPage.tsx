import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      // Placeholder for backend API call
      // await axios.post('/api/contact', formData);
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* SEO Meta Tags */}
      <header>
        <title>Contact Us - Algorise Tech Explorers</title>
        <meta name="description" content="Get in touch with Algorise Tech Explorers for inquiries about our programs, admissions, or events." />
        <meta name="keywords" content="contact, Algorise Tech Explorers, LMS, education, STEM" />
        <meta name="robots" content="index, follow" />
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We're here to answer your questions and help you join our community of innovators.
          </p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    placeholder="Your name"
                    aria-required="true"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    placeholder="Your email"
                    aria-required="true"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                    placeholder="Your message"
                    rows={5}
                    aria-required="true"
                    disabled={loading}
                  ></textarea>
                </div>
                {error && (
                  <p className="text-red-500 text-sm" role="alert">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-green-500 text-sm" role="alert">
                    {success}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200 flex items-center justify-center"
                  disabled={loading}
                  aria-label="Send message"
                >
                  {loading ? (
                    <FaPaperPlane className="animate-pulse mr-2" />
                  ) : (
                    <FaPaperPlane className="mr-2" />
                  )}
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Our Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-indigo-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:info@algorisetech.com"
                        className="hover:text-indigo-600 transition duration-200"
                      >
                        info@algorisetech.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-indigo-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+1234567890"
                        className="hover:text-indigo-600 transition duration-200"
                      >
                        +1 (234) 567-890
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-indigo-600 text-2xl mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Innovation Drive, Tech City, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Map Placeholder (Replace with Google Maps iframe)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-8">
            Explore our programs and start your journey with Algorise Tech Explorers.
          </p>
          <Link
            to="/admission"
            className="py-3 px-6 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition duration-200"
            aria-label="Apply for Admission"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
