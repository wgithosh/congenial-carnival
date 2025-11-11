import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.length === 0 ? (
        <p>No users found 😢</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u._id}>{u.name} - {u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
