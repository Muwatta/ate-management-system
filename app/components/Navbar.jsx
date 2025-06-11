import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaBookOpen, FaUserPlus, FaEnvelope, FaBullhorn, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl text-blue-700">
          {/* Slightly smaller Logo image */}
          <img
            src="/images/ATE-img-logo.jpg"
            alt="Algorise Logo"
            className="h-11 w-auto"
            style={{ maxHeight: 44 }}
          />
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="flex items-center gap-1 text-white text-base hover:text-orange-400 hover:bg-gray-900 px-3 py-1.5 rounded transition">
            <FaBookOpen className="text-xl" /> About
          </Link>
          <Link href="/academics" className="flex items-center gap-1 text-white text-base hover:text-orange-400 hover:bg-gray-900 px-3 py-1.5 rounded transition">
            <FaBookOpen className="text-xl" /> Academics
          </Link>
          <Link href="/admission" className="flex items-center gap-1 text-white text-base hover:text-orange-400 hover:bg-gray-900 px-3 py-1.5 rounded transition">
            <FaUserPlus className="text-xl" /> Admission
          </Link>
          <Link href="/events-news" className="flex items-center gap-1 text-white text-base hover:text-orange-400 hover:bg-gray-900 px-3 py-1.5 rounded transition">
            <FaBullhorn className="text-xl" /> Events
          </Link>
          <Link href="/contact" className="flex items-center gap-1 text-white text-base hover:text-orange-400 hover:bg-gray-900 px-3 py-1.5 rounded transition">
            <FaEnvelope className="text-xl" /> Contact
          </Link>
        </div>
        {/* Profile Icon (right side) */}
        <div className="flex items-center gap-4">
          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-2xl text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
          {/* Profile dropdown placeholder */}
          <div className="relative group">
            <button className="focus:outline-none">
              {/* Slightly smaller profile icon */}
              <span className="inline-block rounded-full overflow-hidden border-2 border-white w-11 h-11 bg-gray-200">
                <FaUserCircle className="w-full h-full text-gray-400 text-3xl" />
              </span>
            </button>
            {/* Dropdown (hidden by default, show on hover/focus) */}
            <div className="absolute right-0 mt-2 w-44 bg-white rounded shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition">
              <Link href="/auth/login" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Login</Link>
              {/* Add more dropdown items here as needed */}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black shadow-lg px-4 pb-4">
          <Link href="/about" className="flex items-center gap-2 py-2 border-b text-white text-base hover:text-orange-400 hover:bg-gray-900 rounded transition" onClick={() => setOpen(false)}>
            <FaBookOpen className="text-xl" /> About
          </Link>
          <Link href="/academics" className="flex items-center gap-2 py-2 border-b text-white text-base hover:text-orange-400 hover:bg-gray-900 rounded transition" onClick={() => setOpen(false)}>
            <FaBookOpen className="text-xl" /> Academics
          </Link>
          <Link href="/admission" className="flex items-center gap-2 py-2 border-b text-white text-base hover:text-orange-400 hover:bg-gray-900 rounded transition" onClick={() => setOpen(false)}>
            <FaUserPlus className="text-xl" /> Admission
          </Link>
          <Link href="/events-news" className="flex items-center gap-2 py-2 border-b text-white text-base hover:text-orange-400 hover:bg-gray-900 rounded transition" onClick={() => setOpen(false)}>
            <FaBullhorn className="text-xl" /> Events
          </Link>
          <Link href="/contact" className="flex items-center gap-2 py-2 text-white text-base hover:text-orange-400 hover:bg-gray-900 rounded transition" onClick={() => setOpen(false)}>
            <FaEnvelope className="text-xl" /> Contact
          </Link>
          {/* Mobile Profile/Login */}
          <Link href="/auth/login" className="flex items-center gap-2 py-2 text-white text-base hover:text-orange-400 hover:bg-gray-900 rounded transition mt-2">
            <FaUserCircle className="text-xl" /> Login
          </Link>
        </div>
      )}
    </nav>
  );
}