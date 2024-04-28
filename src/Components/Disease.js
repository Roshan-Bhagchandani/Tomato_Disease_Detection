import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import "../CSS/disease.css"
import tomato from "../Images/tomato1.jpg"

export const Disease = () => {
    const { id } = useParams();
    const disease = {
        name: "Something",
        about: "paragraph1................ | pragpragh2....................... | pragraph3...",
        precaution: "paragraph1................ | pragpragh2....................... | pragraph3...",
        image : tomato
    }

    const [about, setAbout] = useState(disease.about.split('|'));
    const [precautions, setPrecautions] = useState(disease.precaution.split('|'));

    return (
        <div className="disease-details-container">
            <h2 className="disease-title">{disease.name}</h2>
            <div className="disease-content">
                <div className="left-content">
                    <img src={tomato} alt="Disease" />
                </div>
                <div className="right-content">
                    <h3>About:</h3>
                    <ul>
                        {about.map((paragraph, index) => (
                            <li key={index}>{paragraph}</li>
                        ))}
                    </ul>
                    <h3>Precautions:</h3>
                    <ul>
                        {precautions.map((precaution, index) => (
                            <li key={index}>{precaution}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}