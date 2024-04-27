import React from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
     const { t } = useTranslation();
    return (
        <header>
            <h1>{t('Tomato Disease Detection Portal')}</h1>
        </header>
    )
}