import React from "react";
import { AboutusCard } from "./AboutusCard";
import dheerajImage from "../Images/dheeraj.jpeg"
import rashidImgae from "../Images/rashid.png"
import roshanImage from "../Images/passphoto.png"
import shananImage from "../Images/shanan.jpg"
import { useTranslation } from "react-i18next";

export const Aboutus = () => {
     const { t } = useTranslation();

    const data = [
        {
            name : t("Md. Rashid Aziz"),
            github : "https:/github.com/rashid642",
            instagram : "instagram",
            linkedin : "linekdin",
            image : rashidImgae
        },
        {
            name : t("Roshan Bhagchandani"),
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : roshanImage
        },
        {
            name : t("Dheeraj Chhatani"),
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : dheerajImage
        },
        {
            name : t("Shahan Shetty"),
            github : "github",
            instagram : "instagram",
            linkedin : "linekdin",
            image : shananImage
        }
    ]
    return (
      <div className="bottom">
        <h2>{t('About Us')}</h2>
        <br />
        <h3>
         {t("We are Thadomal Shahani Computer Engineering Students passing out in 2024")}
        </h3>
        <br />
        <h4>{t("Project Group no : 24")}</h4>
        <div id="about">
          {data.map((item, index) => (
            <AboutusCard
              key={index}
              name={item.name}
              github={item.github}
              instagram={item.instagram}
              linkedin={item.linkedin}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
}