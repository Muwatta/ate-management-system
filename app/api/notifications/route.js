import { getNotifications } from '../../../lib/supabase';

export async function GET() {
  try {
    const notifications = await getNotifications();
    return Response.json(notifications);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}