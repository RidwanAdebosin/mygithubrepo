import React from "react";
import "../styles/error404.css";
import Navigation from "../components/Navigation";
import ErrorImg from "../assets/images/errorImg.jpeg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <Navigation />
      <div className="wrapper ">
        <Helmet>
          <title>Error Page</title>
          <meta
            name="description"
            content="This is the error page for handling any possible errors during an api call"
          />
          <link rel="canonical" href="/error" />
        </Helmet>

        <h2>Error 404: Contact Page Not Found!</h2>
        <h5>Contact Elon Musk for help &#128514;</h5>
        <div className="error">
          <img src={ErrorImg} alt="" />

          <div className="error-btn">
            <Link to="/" className="btn">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
