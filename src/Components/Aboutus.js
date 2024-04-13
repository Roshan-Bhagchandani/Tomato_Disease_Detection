import React from "react";

export const Aboutus = () => {
    const data = [
        {
            name : "Md. Rashid Aziz",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin"
        },
        {
            name : "Roshan Bhagchandani",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin"
        },
        {
            name : "Dheeraj Chahatani",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin"
        },
        {
            name : "Shahan Shetty",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin"
        }
    ]
    return (
        <div className="bottom">
            <h2>ABOUT US</h2>
            <br />
            <h3>
                We are Thadomal Shahani Computer Engineering Students passing out in
                2024
            </h3>
            <br />
            <h4>Project Group no : 24</h4>
            <div id="about">

            </div>
        </div>
    )
}