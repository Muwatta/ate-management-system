import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-relblack text-white p-4 text-center">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="inline text-2xl hover:text-blue-400 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="inline text-2xl hover:text-blue-300 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="inline text-2xl hover:text-pink-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="inline text-2xl hover:text-blue-600 transition" />
        </a>
      </div>
      <div>
        &copy; {year} Algorise Tech Explorers. All rights reserved.
      </div>
    </footer>
  );
}
