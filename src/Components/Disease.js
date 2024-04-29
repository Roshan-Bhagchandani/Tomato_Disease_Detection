import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import "../CSS/disease.css"
import tomato from "../Images/tomato1.jpg"
import {Navbar} from "./Navbar.js"
import { fetchData } from "./fetchData.js";
import { useTranslation } from "react-i18next";

export const Disease = () => {
    const { id } = useParams();
    const {t} = useTranslation()
    const disease =fetchData(t)[id-1]
    const [about, setAbout] = useState(disease.about.split('@'));
    const [precautions, setPrecautions] = useState(disease.precaution.split('@'));
    const [img,setImg]=useState(disease.image)
    const [name,setName]=useState(disease.disease)
    return (
      <div>
        <Navbar></Navbar>
        <div className="disease-details-container">
          <h2 className="disease-title">{name}</h2>
          <div className="disease-content">
            <div className="left-content">
              <img src={img} alt="Disease" />
            </div>
            <div className="right-content">
              <h3>{t('About')}:</h3>
              <ul>
                {about.map((paragraph, index) => (
                  <li key={index}>{paragraph}</li>
                ))}
              </ul>
              <h3>{t('Measures')}:</h3>
              <ul>
                {precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}