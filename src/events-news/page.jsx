'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsNewsSection from '../sections/EventsNewsSection';

export default function EventNewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 p-4">
        <EventsNewsSection />
      </main>
      <Footer />
    </>
  );
}