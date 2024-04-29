import React from "react";
import pic from "../Images/tomato1.jpg"

export const Card = (props) => {
    const {disease, about,image} = props;
    return (
        <div id="diseases">
            <img id="box" src= {image} alt="user" />
            <h1 className="special"> {disease} </h1>
            <p className="abt"> {about} </p>
        </div>
    )
}