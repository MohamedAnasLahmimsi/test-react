import React from "react";
import './header.css';
import smarteez from './assets/images/smarteez.png';
import reactjs from './assets/images/reactjs.png';

function Header() {
    return (
      <div className="header-div">
        <img src={smarteez} className="logo" alt="Photo d'exemple" />
        <p className="titre">Test Développeur Front End</p>
        <img src={reactjs} className="logoReact" />
      </div>
    );
  }
  
  export default Header;