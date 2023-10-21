import React from "react";
import "../styles/home.css";

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
      <section className="home-container">
        <div className="profile-block">
          <h1>Welcome, adebosinadewale@gmail.com</h1>
          <ProfileCard />
        </div>
        <div className="home-details">
          <p>Name: Ridwan Adebosin</p>
        </div>
      </section>
    </>
  );
};
export default Home;
