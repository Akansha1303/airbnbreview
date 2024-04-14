import React from "react";
import Star from './images/Star 1.png';

export default function Card(props){
    return(
        <div className="card">
            <img src= {props.img} className="photo"></img>
            <div className="about">
                <img src={Star} className="star"></img>
                <p className="rate">{props.rate}</p>
                <p className="place">{props.place}</p>
            </div>
            <p className="remark">{props.remark}</p>
            <p className="cost"><b>{props.cost}</b>/ person</p>
        </div>
    );
}