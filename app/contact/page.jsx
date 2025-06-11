'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../sections/ContactSection';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 p-4">
        <ContactSection />      
      </main>
      <Footer />
    </>
  );
}