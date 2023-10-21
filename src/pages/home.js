import React, { useEffect } from "react";
import "../styles/home.css";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/RidwanAdebosin"
        alt=""
        className="profile-picture"
      />
    </>
  );
};

const Home = () => {
  return (
    <>
      <Navigation />
      <section className="home-container">
        <div className="profile-block">
          <h1>Meet the new Black Coder in Town</h1>
          <ProfileCard />
        </div>
        <div className="home-details">
          <p>Name: Ridwan Adebosin</p>
          <p>Followers: "https://api.github.com/users/RidwanAdebosin"</p>
        </div>
      </section>
    </>
  );
};
export default Home;
