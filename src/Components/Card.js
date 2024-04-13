import React from "react";

export const Card = (props) => {
    const {disease, about} = props;
    return (
        <div id="diseases">
            <img id="box" src="/images/PaperBellBact Spot.JPG" alt="user" />
            <h1 className="special"> {disease} </h1>
            <p> {about} </p>
        </div>
    )
}