import { NextResponse } from 'next/server';

// Dummy admin for demo
const ADMIN = { username: 'admin', password: '#*admin12345' };

export async function POST(req) {
  const { username, password } = await req.json();
  if (username === ADMIN.username && password === ADMIN.password) {
    return NextResponse.json({ message: 'Login successful' }); // status 200
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

