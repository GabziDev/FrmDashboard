import { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/styles/level.css";

export default function Level() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:45243/api/v1/levels")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const getUsernameClass = (rank) => {
    switch (rank) {
      case 1:
        return 'firstUsername';
      case 2:
        return 'secondUsername';
      case 3:
        return 'thirdUsername';
      default:
        return 'defaultUsername';
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="banner">
          <h1>🧀FROMAGERIE🧀</h1>
        </div>
        <div className="classement">
          <table>
            <thead>
              <tr>
                <th>Utilisateur</th>
                <th>XP</th>
                <th>Niveau</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="line" key={index}>
                  <td>
                    <span className="rank">{index + 1}. </span>
                    <span className={getUsernameClass(index + 1)}>{user.userId}</span>
                  </td>
                  <td>{user.xpRank}</td>
                  <td>{user.levelRank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
