import React from "react";
import { Card } from "./Card";
import  { useState } from "react";
import { useTranslation } from "react-i18next";

export const Cardbox = () => {
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

    const data = [
      {
        disease: t("Early Blight"),
        about: t("early-para"),
      },
      {
        disease: t("Late Blight"),
        about: t("late-para"),
      },
      {
        disease: t("Bacterial Spot"),
        about: t("bacterial-para"),
      },
      {
        disease: t("Tomato Mosaic Virus"),
        about: t("tomato-para"),
      },
      {
        disease: t("Septoria Leaf Spot"),
        about: t("septoria-para"),
      },
    ];
    return (
        <div>
            {data.map((item, index) => (
                <Card key={index} disease={item.disease} about={item.about} />
                ))}
        </div>
    )
}