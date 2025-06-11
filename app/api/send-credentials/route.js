import nodemailer from 'nodemailer';

export async function POST(req) {
  const { email, id, password } = await req.json();
  // Configure your transporter with Gmail credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Your Account Credentials',
    text: `Your User ID: ${id}\nPassword: ${password}`,
  });
  return Response.json({ success: true });
}