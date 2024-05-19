import { useState, useEffect } from "react";
import "../assets/styles/navbar.css";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    const currentPath = window.location.pathname;

    setCurrentPage(currentPath);
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/" className={currentPage === "/" ? "active" : ""}>
              Classement
            </a>
          </li>
          <li>
            <a href="/bot/status" className={currentPage === "/bot/status" ? "active" : ""}>
              Status
            </a>
          </li>
          <li>
            <a href="/about" className={currentPage === "/about" ? "active" : ""}>
              À Propos
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
