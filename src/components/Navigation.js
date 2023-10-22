import { NavLink } from "react-router-dom";
import Nav from "../assets/images/extras/ShortNav";
import React, { useState } from "react";
import "../styles/navigation.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [shortenNav, setShortenNav] = useState(false);

  const toggleNav = () => {
    // console.log("showwww");
    setShortenNav(true);
  };

  const closeNav = () => {
    setShortenNav(false);
  };
  return (
    <>
      <section className={` nav_bar ${shortenNav ? "show-nav-bar" : ""}`}>
        <ul>
          <li onClick={closeNav}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "grey" } : { color: "black" }
              }
              className="navigate"
              to="/"
            >
              Home Page
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "grey" } : { color: "black" }
              }
              className="navigate"
              to="/repos"
            >
              Repositories Page
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "grey" } : { color: "black" }
              }
              className="navigate"
              to="/error404"
            >
              Error404 Page
            </NavLink>
          </li>
          <li onClick={closeNav}>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "grey" } : { color: "black" }
              }
              className="navigate"
              to="/testerror"
            >
              Error Boundary
            </NavLink>
          </li>
        </ul>

        <div className="close-nav" onClick={closeNav}>
          <FaTimes />
        </div>
      </section>
      <div className="shorten-nav" onClick={toggleNav}>
        {/* <Nav /> */}
        <FaBars />
      </div>
    </>
  );
};

export default Navigation;
