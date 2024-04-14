import React from "react";
import { AboutusCard } from "./AboutusCard";
import dheerajImage from "../Images/dheeraj.jpeg"
import rashidImgae from "../Images/rashid.png"
import roshanImage from "../Images/passphoto.png"
import shananImage from "../Images/shanan.jpg"

export const Aboutus = () => {
    const data = [
        {
            name : "Md. Rashid Aziz",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : rashidImgae
        },
        {
            name : "Roshan Bhagchandani",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : roshanImage
        },
        {
            name : "Dheeraj Chahatani",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : dheerajImage
        },
        {
            name : "Shahan Shetty",
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : shananImage
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
                {data.map((item, index) => (
                <AboutusCard key={index} 
                name = {item.name}
                github = {item.github}
                instagram = {item.instagram}
                linkedin = {item.linkedin}
                image = {item.image}
                 />
                ))}
            </div>
        </div>
    )
}