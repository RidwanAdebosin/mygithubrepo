import React from "react";
import { useState, useEffect } from "react";
import "../styles/home.css";

import { FaGithub, FaSearchLocation } from "react-icons/fa";

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
  const [profile, setProfile] = useState({});

  useEffect(() => {
    //github repositories API
    const URL = "https://api.github.com/users/RidwanAdebosin";
    const fetchUsers = async () => {
      //fetching repositories from GitHub
      const response = await fetch(URL);
      //converting the http response to a json
      const data = await response.json();

      setProfile(data);
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="profile-block">
          <h1>adebosinadewale@gmail.com, welcome you!</h1>
          <ProfileCard />
        </div>
        <div className="home-details">
          <p>Ridwan Adebosin</p>
          <div className="follow-details">
            <p className="icon-1">
              <FaGithub /> Followers: {profile.followers}{" "}
            </p>
            <p className="icon-1">
              <FaGithub /> Following: {profile.following}{" "}
            </p>
            <p className="icon-1">
              <FaSearchLocation /> Location: {profile.location}{" "}
            </p>
          </div>
        </div>
        <div className="follow-btn">
          <a href={"https://github.com/RidwanAdebosin"}>
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
