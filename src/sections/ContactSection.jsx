import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-gray-50 px-6 py-16 rounded-2xl shadow-inner max-w-7xl mx-auto my-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 flex justify-center items-center gap-3">
          <FaEnvelope className="text-red-500" /> Contact Us
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Have questions or suggestions? Reach out and we’ll respond as soon as possible.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info Block */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
            <FaEnvelope className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">Email</h4>
              <p className="text-gray-600">info@algorise.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
            <FaPhoneAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">Phone</h4>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
            <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h4 className="font-bold text-gray-800">Location</h4>
              <p className="text-gray-600">123 Algorise St, Tech City, TX</p>
            </div>
          </div>

          {/* Social Media Links (Optional) */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-sky-400 hover:text-sky-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>

      {/* Map Placeholder */}
      <div className="mt-16 h-64 w-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
        [ Google Map Embed Coming Soon ]
      </div>
    </section>
  );
}
