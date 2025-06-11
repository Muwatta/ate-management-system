export async function getNotifications() {
  const res = await fetch('https://mxcrqvwbbsklvbnoczzf.supabase.co/notifications');
  if (!res.ok) throw new Error('Failed to fetch notifications');
  return res.json();
}
