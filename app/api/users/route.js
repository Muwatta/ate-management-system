export async function GET() {
  // Replace with your real data source
  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      role: 'student',
      email: 'john@example.com',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      role: 'teacher',
      email: 'jane@example.com',
    },
  ];
  return Response.json(users);
}

