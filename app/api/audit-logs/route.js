export async function GET() {
  // Replace with your real data source
  const logs = [
    {
      id: 1,
      time: new Date().toISOString(),
      action: 'User Created',
      user: 'admin',
      details: 'Created user John Doe',
    },
  ];
  return Response.json(logs);
}