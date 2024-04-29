import React from "react";
import pic from "../Images/tomato1.jpg"

export const Card = (props) => {
    const {disease, about} = props;
    return (
        <div id="diseases">
            <img id="box" src= {pic} alt="user" />
            <h1 className="special"> {disease} </h1>
            <p className="abt"> {about} </p>
        </div>
    )
}