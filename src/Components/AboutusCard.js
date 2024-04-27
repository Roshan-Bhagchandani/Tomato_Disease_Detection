import React from "react";
import "../CSS/index.css"

export const AboutusCard = (props) => {
    const { name, github, instagram, linkedin, image } = props;
    return (
        <div className="pic">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <a
                href="https://github.com/Roshan-Bhagchandani"
                target="_blank"
                rel="noopener noreferrer"
            ><i class="fa fa-github" ></i
            ></a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a
                href="http://www.linkedin.com/in/dhattarwalaman"
                target="_blank"
                rel="noopener noreferrer"
            ><i class="fa fa-linkedin-square" ></i
            ></a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a
                href="http://www.instagram.com/dhattarwalaman"
                target="_blank"
                rel="noopener noreferrer"
            ><i class="fa fa-instagram" ></i
            ></a>

        </div>
    )
}