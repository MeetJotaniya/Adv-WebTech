import Link from "next/link";

export default async function UsersPage() {
  const res = await fetch(
    "https://6940e1af993d68afba6d4df1.mockapi.io/users"
  );

  const users = await res.json();

  return (
    <div>
      <h2>Users List</h2>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>
                <Link href={`/users/${user.id}`}>
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
