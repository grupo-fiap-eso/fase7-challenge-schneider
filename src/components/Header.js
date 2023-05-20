
import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderStyle } from "../assets/css/style";
import Flag from "./Flag";
import { BrFlag, UsaFlag, EspFlag } from "../assets/img/index";

const Header = () => {
  const { i18n } = useTranslation();
 
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <HeaderStyle>
      <header>
        <div className="flags-container">
          <Flag
            image={BrFlag}
            onClick={() => changeLanguage('pt-BR')}
          />
          <Flag
            image={UsaFlag}
            onClick={() => changeLanguage('en-US')}
          />
          <Flag
            image={EspFlag}
            onClick={() => changeLanguage('es-MX')}
          />
        </div>
      </header>
    </HeaderStyle>
  );
};

export default Header;
