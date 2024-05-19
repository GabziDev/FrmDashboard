import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/styles/level.css";

export default function Level() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Classement 🧀FROMAGERIE🧀</h1>
        <div className="classement">
          <table>
            <tr>
              <th>Utilisateur</th>
              <th>XP</th>
              <th>Niveau</th>
            </tr>
            <tr className="line">
              <td>Gabzdev</td>
              <td>4543434</td>
              <td>27</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
