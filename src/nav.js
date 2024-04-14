import React from "react";
import logo from './images/airbnb.png';

export default function Nav(){
    return(
        <div className="nav">
            <img src={logo} className="logo"></img>
            <p className="air">airbnb</p>
        </div>
    );
}