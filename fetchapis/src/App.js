import logo from './logo.svg';
import './App.css';
import { useState, useEffect }
  from 'react';
import React from 'react';

function App() {
  const [userData, setUserData] = useState({});
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const getUserData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>
  );
}



export default App;
