import Link from "next/link";

export default async function StudentsPage() {
  const res = await fetch(
    "https://6940e1af993d68afba6d4df1.mockapi.io/students"
  );

  const students = await res.json();

  return (
    <div>
      <h2>Students List</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll NO</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>
                <Link href={`/students/${student.id}`}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
