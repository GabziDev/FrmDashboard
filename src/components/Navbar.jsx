import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <Link className={currentPage === "/" ? "active" : ""}>
              Classement
            </Link>
          </li>
          <li>
            <Link className={currentPage === "/bot/status" ? "active" : ""}>
              Status
            </Link>
          </li>
          <li>
            <Link className={currentPage === "/about" ? "active" : ""}>
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
