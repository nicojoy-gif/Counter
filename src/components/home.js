import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div className='home-container'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Simple Counter App</title>
      </Helmet>
      <Nav />
      <div className="main-content">
        <div className="countHome">
          <h1 className="count-header">A Simple counter</h1>
          <p className="counter-text">
            A Simple Counter App is an App that allows users to update the
            displayed count number by triggering the number count buttons to add
            or deduct.
          </p>
          <button className="counts-btn">
            <Link to="/UseCounter" className="count-btn">
              GET STARTED NOW
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
