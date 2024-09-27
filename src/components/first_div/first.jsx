import React from "react";
import "./first.css";
import Img from '../../assets/aadhaar2.png'
import {BsArrowRight} from 'react-icons/bs'
import { Outlet,Link } from "react-router-dom";



const first = () => {
  return (
    <div className="first_div">
      <div className="content">
        <div className="hs">
        <h1>Intelligent </h1>
        <h1>Automation </h1>
        <h1> For <span>HealthCare</span> </h1>
        </div>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum rhoncus leo eu egestas. Aliquam erat volutpat. Vestibulum et quam vitae eros ultrices porta ut sed erat. Suspendisse commodo id felis vel porttitor</p>
        <button className="arrow"><Link className="link" to="/patient">New Patient</Link><BsArrowRight/></button>
      </div>
      <div className="aadhaar">
        <img className="aimg" src={Img}></img>
      </div>
    </div>
  );
};

export default first;
