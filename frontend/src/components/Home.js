import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

import LandingImg from "../assets/landing-image.png";

const Home = () => {
  return (
    <div className="content-section">
      <div className="text-content">
        <div className="text-container">
          <h1 className="title">Everything you need in one place.</h1>
          <p className="sub-title">A few clicks is all it takes.</p>
        </div>
        <div className="button-container">
          <Link to="/buyer-register" className="important margin-right">
            Register
          </Link>
          <Link to="/login" className="less-important">
            Login
          </Link>
        </div>
      </div>
      <div className="img-content">
        <img src={LandingImg} alt="landing-img" className="landing-img" />
      </div>
    </div>
  );
};

export default Home;
