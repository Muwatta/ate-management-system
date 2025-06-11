'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdmissionSection from '../sections/AdmissionSection';

export default function AdmissionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 p-4">
        <AdmissionSection />
      </main>
      <Footer />
    </>
  );
}