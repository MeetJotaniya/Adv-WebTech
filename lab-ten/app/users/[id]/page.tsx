export default async function StudentDetailPage({ params }: any) {
  const { id } = await params;

  const res = await fetch(
    `https://6940e1af993d68afba6d4df1.mockapi.io/users/${id}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return <div>User not found</div>;
  }

  const user = await res.json();

  return (
    <div>
      <h2>User Details</h2>
      <p><b>ID:</b> {user.id}</p>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>City:</b> {user.city}</p>
    </div>
  );
}