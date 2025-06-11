import React, { useState, useEffect } from 'react';
import {
  FaUserPlus,
  FaCheckCircle,
  FaCalendarAlt,
  FaFileAlt,
  FaMoneyBillWave,
  FaGlobe,
  FaClipboardList,
  FaEnvelopeOpenText,
  FaLaptopCode,
  FaUserGraduate,
  FaInfoCircle,
} from 'react-icons/fa';

export default function AdmissionSection() {

  return (
    <section className="bg-white p-8 rounded-xl shadow max-w-6xl mx-auto my-10 space-y-10">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4">
        <FaUserPlus className="text-green-600 text-3xl" />
        <h2 className="text-3xl font-bold text-gray-800">Admission Portal</h2>
      </div>

      {/* Intro */}
      <div className="space-y-3">
        <p className="flex items-center gap-2 text-lg text-gray-700">
          <FaCheckCircle className="text-green-500" />
          Our admission process is simple, inclusive, and transparent.
        </p>
        <p className="text-gray-600">
          Whether you're a local or international student, explore the information below to begin your journey.
        </p>
      </div>

      {/* Quick Links (A-Z Style) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm font-medium text-blue-600">
        <a href="#overview" className="hover:underline">Admission Overview</a>
        <a href="#apply" className="hover:underline">How to Apply</a>
        <a href="#fees" className="hover:underline">Fee Structure</a>
        <a href="#documents" className="hover:underline">Document Checklist</a>
        <a href="#scholarship" className="hover:underline">Scholarships</a>
        <a href="#international" className="hover:underline">International Students</a>
        <a href="#virtual-tour" className="hover:underline">Virtual Tour</a>
        <a href="#uniform" className="hover:underline">Uniform Policy</a>
        <a href="#calendar" className="hover:underline">Admission Calendar</a>
        <a href="#boarding" className="hover:underline">Boarding Info</a>
        <a href="#prospectus" className="hover:underline">Download Prospectus</a>
        <a href="#faq" className="hover:underline">FAQs</a>
      </div>

      {/* Admission Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <InfoCard icon={<FaClipboardList />} title="Requirements" text="Check the age, documents, and academic requirements by grade level." />
        <InfoCard icon={<FaCalendarAlt />} title="Important Dates" text="Application opening, entrance test schedule, and result announcement." />
        <InfoCard icon={<FaMoneyBillWave />} title="Fees & Payment" text="View tuition, PTA dues, installment plans, and payment methods." />
        <InfoCard icon={<FaLaptopCode />} title="Online Application" text="Submit your admission form online and track application status." />
        <InfoCard icon={<FaUserGraduate />} title="Scholarships" text="Explore merit-based and need-based financial aid opportunities." />
        <InfoCard icon={<FaGlobe />} title="International Applicants" text="Visa support, hostel details, and cultural onboarding resources." />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
        <a href="/apply" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Start Application
        </a>
        <a href="/prospectus.pdf" className="flex items-center gap-2 text-blue-700 underline hover:text-blue-900">
          <FaEnvelopeOpenText />
          Download Prospectus
        </a>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2 text-green-600 text-2xl">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}
