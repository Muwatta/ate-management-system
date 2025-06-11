'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../sections/AboutSection';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 p-4">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}