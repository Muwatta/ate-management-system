'use client';

import React from 'react';
import { jsPDF } from 'jspdf';

export default function Certificate({ student, course, date }) {
  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: 'a4'
    });

    // Background (optional)
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, 842, 595, 'F');

    // Certificate title
    doc.setFontSize(36);
    doc.setTextColor(0, 102, 204);
    doc.setFont('helvetica', 'bold');
    doc.text('Certificate of Completion', 421, 100, { align: 'center' });

    // Student name
    doc.setFontSize(28);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'normal');
    doc.text(`This certifies that`, 421, 180, { align: 'center' });

    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text(student, 421, 220, { align: 'center' });

    // Course name
    doc.setFontSize(28);
    doc.setFont('helvetica', 'normal');
    doc.text(`has successfully completed the course`, 421, 260, { align: 'center' });

    doc.setFontSize(30);
    doc.setFont('helvetica', 'bold');
    doc.text(course, 421, 300, { align: 'center' });

    // Footer
    doc.setFontSize(16);
    doc.setFont('helvetica', 'italic');
    doc.text('Powered by ATE LMS', 421, 500, { align: 'center' });

    // Save PDF
    doc.save(`${course}_Certificate.pdf`);
  };

  return (
    <div className="border p-6 rounded shadow bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Certificate of Completion</h2>
      <p>
        This certifies that <strong>{student}</strong> has completed{' '}
        <strong>{course}</strong> on {date}.
      </p>
      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Download Certificate
      </button>
    </div>
  );
}
