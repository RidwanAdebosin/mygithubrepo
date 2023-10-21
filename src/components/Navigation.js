import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <>
      <section className="nav_bar">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "ash" } : { color: "black" }
              }
              className="navigate"
              to="/"
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "ash" } : { color: "black" }
              }
              className="navigate"
              to="/repos"
            >
              Repositories Page
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "ash" } : { color: "black" }
              }
              className="navigate"
              to="/error404"
            >
              Error404 Page
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "ash" } : { color: "black" }
              }
              className="navigate"
              to="/testerror"
            >
              Error Boundary
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navigation;
