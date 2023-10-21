import React from "react";
import "../styles/repos.css";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import LoadingIcon from "../assets/images/Loading_icon.gif";
import { Link } from "react-router-dom";
import SingleRepo from "../components/SingleRepo";
import Profiles from "../components/Profile";
import Pagination from "../components/Pagination";
import { Helmet } from "react-helmet";
import { RepoDisplay } from "../components/RepoDisplay";

const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    //github repositories API
    const URL = "https://api.github.com/users/RidwanAdebosin/repos";
    const fetchUsers = async () => {
      setLoading(true);
      //fetching repositories from GitHub
      const response = await fetch(URL);
      //converting the http response to a json
      const data = await response.json();
      setLoading(false);
      setRepos(data);
      setTotalPages(Math.ceil(data.length / RepoDisplay));
      console.log(data);
    };
    fetchUsers();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  const handlePrevClick = () => {
    setPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Helmet>
        <title>All Repos</title>
        <meta
          name="description"
          content="This is the Home Page for my GitHub repositories using the GitHub API calls"
        />
        <link rel="canonical" href="/repos" />
      </Helmet>

      <section className="repos-container">
        {loading ? (
          <img src={LoadingIcon} alt="" />
        ) : (
          <div>
            <h1 className="title">Ridwan Adebosin's GitHub Repos</h1>

            <p className="pages">
              Page {page} of [{totalPages}]
            </p>
            <hr />
            <Profiles repos={repos} page={page} id={repos.name} />
          </div>
        )}
        <Pagination
          totalPages={totalPages}
          handlePrev={handlePrevClick}
          handleClick={handleClick}
          handleNext={handleNextClick}
          disabledPrev={page <= 1}
          disabledNext={page >= totalPages}
        />
      </section>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </>
  );
};

export default Repositories;
