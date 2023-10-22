import React from "react";
import { Link } from "react-router-dom";

const RepoData = ({ repo }) => {
  return (
    <div className="home">
      <div className="home-cont">
        <h1>
          <span className="span"></span> {`${repo.name}`}
        </h1>
        <hr />
        <h3>
          <span className="span">Stack: </span> {`${repo.language}`}
        </h3>
        <div className="error-btn">
          <Link to={`/repos/${repo.name}`} className="btn">
            Repo Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoData;
