import React, { useState, useEffect } from "react";

const PaginationExample = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
      );

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task 5: Pagination Example</h1>

      <h2>Current Page: {page}</h2>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === 2}
        style={{ marginLeft: "10px" }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationExample;