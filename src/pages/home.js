import React from "react";
import { useState, useEffect } from "react";
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
  const [profile, setProfile] = useState({});

  const [totalFollowing, setTotalFollowing] = useState(0);

  const [totalFollowers, setTotalFollowers] = useState(0);

  useEffect(() => {
    //github repositories API
    const URL = "https://api.github.com/users/RidwanAdebosin";
    const fetchUsers = async () => {
      //fetching repositories from GitHub
      const response = await fetch(URL);
      //converting the http response to a json
      const data = await response.json();

      setProfile(data);
      setTotalFollowing(data.totalFollowing);
      setTotalFollowers(data.totalFollowers);
      console.log(data);
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="profile-block">
          <h1>Welcome, adebosinadewale@gmail.com</h1>
          <ProfileCard />
        </div>
        <div className="home-details">
          <p>Ridwan Adebosin</p>
          <div className="follow-details">
            <p>Followers: {profile.followers} </p>
            <p>Following: {profile.following} </p>
          </div>
        </div>
        <div className="follow-btn">
          <a href={`${profile.url}`}>Follow</a>
        </div>
      </div>
    </>
  );
};
export default Home;
