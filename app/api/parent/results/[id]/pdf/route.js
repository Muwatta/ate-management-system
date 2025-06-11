import PDFDocument from 'pdfkit';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;
  // TODO: Fetch result by ID from your DB
  const result = {
    id,
    student: 'John Doe',
    subject: 'Mathematics',
    term: '1st Term',
    score: 85,
  };

  const doc = new PDFDocument();
  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});

  doc.fontSize(20).text('Result Sheet', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Student: ${result.student}`);
  doc.text(`Subject: ${result.subject}`);
  doc.text(`Term: ${result.term}`);
  doc.text(`Score: ${result.score}`);
  doc.end();

  await new Promise(resolve => doc.on('end', resolve));
  const pdfBuffer = Buffer.concat(buffers);

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="result-${id}.pdf"`,
    },
  });
}