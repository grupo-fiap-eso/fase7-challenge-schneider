import React from "react";
import { useTranslation } from "react-i18next";

function Welcome(){
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('home.welcome')}</p>
    </div>
  );
};

export default Welcome;
