'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AcademicsSection from '../sections/AcademicsSection';

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 p-4">
        <AcademicsSection />
      </main>
      <Footer />
    </>
  );
}