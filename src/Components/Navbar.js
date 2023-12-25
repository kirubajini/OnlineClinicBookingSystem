import React, { useState } from "react";
import {BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import myLogo from './myLogo.jpg';


const Navbar = () => {
    return(
        <nav className="navbar shadow-lg" >
        
       
    <div className="container"   style={{display:"inline-flex",flexWrap: "nowrap"}}>
    <a class="navbar-brand" href="#">
      <img src={myLogo} alt="Bootstrap" width="120" height="90" style={{marginRight: "200px", marginTop:"-40px", display:"flex"}}/>
    </a>   
        <div class="topnav" style={{marginLeft:"400px", display:"flex"}}>
            <a class="active" href="http://localhost:3000/#"  style={{ fontSize:"22px" }}><b>Home</b></a>
            <a class="nav-link" href="about" style={{fontSize:"22px" }}><b>About</b></a>
            <a class="nav-link" href="services" style={{fontSize:"22px" }}><b>Services</b></a>
            <a class="nav-link" href="contactus" style={{ fontSize:"22px" }}><b>Contact Us</b> </a>
            <a class="nav-link" href="appoinment" style={{fontSize:"22px" }}><b>Appoinment</b></a>
                
        </div>
        </div>
        </nav>
    )
}

export default Navbar