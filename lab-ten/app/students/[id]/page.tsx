export default async function StudentDetailPage({ params }: any) {
  const { id } = await params;

  const res = await fetch(
    `https://6940e1af993d68afba6d4df1.mockapi.io/students/${id}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return <div>Student not found</div>;
  }

  const student = await res.json();

  return (
    <div>
      <h2>Student Details</h2>
      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Roll NO:</b> {student.rollNo}</p>
    </div>
  );
}
