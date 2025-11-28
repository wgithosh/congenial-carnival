 import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();

    fetch("http://localhost:5000/api/users", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Failed to load users. Please try again.");
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  };

  useEffect(() => {
    const cleanup = fetchUsers();
    return cleanup;
  }, []);

  return (
    <div className="text-white bg-gray-900 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Loading State */}
      {loading && <p className="text-gray-300">Loading users...</p>}

      {/* Error State */}
      {error && (
        <div className="text-red-400 space-y-2">
          <p>{error}</p>
          <button
            className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md"
            onClick={fetchUsers}
          >
            Retry
          </button>
        </div>
      )}

      {/* User List */}
      {!loading && !error && (
        <>
          {users.length === 0 ? (
            <p className="text-gray-400">No users found 😢</p>
          ) : (
            <ul className="space-y-2">
              {users.map((u) => (
                <li
                  key={u._id}
                  className="bg-gray-800 p-3 rounded-md border border-gray-700"
                >
                  <p className="font-semibold">{u.name}</p>
                  <p className="text-sm text-gray-400">{u.email}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
