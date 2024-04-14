import React from "react";
import collage from './images/Group 77.png';

export default function Grid(){
    return(
        <div className="cont">
            <img src={collage} className="coll"></img>
            <div className="wrt">
                <p className="head">Online Experiences</p>
                <p className="des">Join unique interactive activities led by<br></br> one-of-a-kind hosts—all without leaving home.</p>
                
            </div>
        </div>
    );
}