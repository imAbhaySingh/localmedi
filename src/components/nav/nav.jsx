import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.png";
import Fd from "../first_div/first";
import Ab from "../about_us/about_us";
import { Outlet, Link } from "react-router-dom";

const nav = () => {
  return (
    <div className="navbar">
      <div className="logo_div">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="items">
        <li>
          <Link className="Cli1" to="/">Home</Link>
        </li>
        <li className="li"><Link className="Cli2" to="../about">About Us</Link></li>
        <li className="li">
          <Link className="Cli3" to="../contact_us">
            Contact Us
          </Link>
        </li>
      </div>
    </div>
  );
};

export default nav;
