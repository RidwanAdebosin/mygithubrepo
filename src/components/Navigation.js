import { NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <section className="navigation">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className="navigate"
        to="/"
      >
        Home Page
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className="navigate"
        to="/repos"
      >
        Repositories Page
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className="navigate"
        to="/error404"
      >
        Error404 Page
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        className="navigate"
        to="/testerror"
      >
        Error Boundary
      </NavLink>
    </section>
  );
};

export default Navigation;
