import { NextResponse } from 'next/server';
import multer from 'multer';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';
import { supabase } from '../../../../lib/supabase';

export const config = { api: { bodyParser: false } };

const upload = multer({ storage: multer.memoryStorage() });

function parseCSV(buffer) {
  return parse(buffer.toString(), { columns: true, skip_empty_lines: true });
}

function parseXLSX(buffer) {
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');
  if (!file) return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  let users = [];
  if (file.name.endsWith('.csv')) {
    users = parseCSV(buffer);
  } else if (file.name.endsWith('.xlsx')) {
    users = parseXLSX(buffer);
  } else {
    return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
  }

  // Insert users into Supabase
  const { data, error } = await supabase.from('users').insert(users);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ message: `Inserted ${data.length} users.` });
}