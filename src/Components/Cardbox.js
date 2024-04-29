import React from "react";
import { Card } from "./Card";
import  { useState } from "react";
import { useTranslation } from "react-i18next";
import {fetchData} from "./fetchData"

export const Cardbox = () => {
  const { t } = useTranslation();
  const data = fetchData(t);

  const [lang, setLang] = useState("en");

    return (
        <div>
            {data.map((item, index) => (
                <Card key={index} disease={item.disease} about={item.p} />
                ))}
        </div>
    )
}