import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Notifications
export async function getNotifications() {
  const { data, error } = await supabase.from('notifications').select('*');
  if (error) throw error;
  return data;
}

// Users
export async function getUsers() {
  const { data, error } = await supabase.from('management').select('*');
  if (error) throw error;
  return data;
}

export async function getUsersByRole(role) {
  const { data, error } = await supabase.from('management').select('*').eq('role', role);
  if (error) throw error;
  return data;
}

export async function createUser(userData) {
  const { data, error } = await supabase.from('management').insert([userData]).single();
  if (error) throw error;
  return data;
}

export async function getAdminByUsername(username) {
  const { data, error } = await supabase.from('admins').select('*').eq('username', username);
  if (error) throw error;
  return data?.[0] || null;
}

// Management
export async function getManagement() {
  const { data, error } = await supabase.from('management').select('*');
  if (error) throw error;
  return data;
}

export async function createManagement(data) {
  const { data: inserted, error } = await supabase.from('management').insert([data]).single();
  if (error) throw error;
  return inserted;
}

// Scores
export async function saveScores(classId, subject, scores) {
  // scores: { [studentId]: { ca1, ca2, assignment, exam } }
  const payload = Object.entries(scores).map(([student_id, scoreObj]) => ({
    student_id,
    class_id: classId,
    subject,
    ...scoreObj,
  }));
  const { data, error } = await supabase.from('scores').insert(payload);
  if (error) throw error;
  return data;
}

// Audit Logs
export async function getAuditLogs() {
  const { data, error } = await supabase.from('audit_logs').select('*');
  if (error) throw error;
  return data;
}

export async function createAuditLog(data) {
  const { data: inserted, error } = await supabase.from('audit_logs').insert([data]).single();
  if (error) throw error;
  return inserted;
}

// Auth
export async function signUp(form) {
  const { user, error } = await supabase.auth.signUp({
    email: form.email,
    password: form.password,
    options: {
      data: { username: form.username, role: 'admin' },
    },
  });
  if (error) throw error;
  return user;
}