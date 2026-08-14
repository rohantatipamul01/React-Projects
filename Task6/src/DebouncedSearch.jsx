import React, { useState, useEffect } from "react";

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [users, setUsers] = useState([]);

  // Debounce Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  // API Call
  useEffect(() => {
    if (!debouncedSearch) {
      setUsers([]);
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );

        const data = await response.json();

        const filteredUsers = data.filter((user) =>
          user.name
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase())
        );

        setUsers(filteredUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [debouncedSearch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounced Search</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Results</h3>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DebouncedSearch;