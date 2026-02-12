import { useEffect, useState } from "react";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

const Card = ({ details }) => {
  const { name, email, address, phone } = details;

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <h4>Address: {address.city}</h4>
      <h4>Mobile No: {phone}</h4>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(USERS_API);
      const users = await response.json();
      setData(users);
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <Card key={user.id} details={user} />
      ))}
    </div>
  );
};

export default App;
