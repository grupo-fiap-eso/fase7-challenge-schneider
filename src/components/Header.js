
import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderStyle } from "../assets/css/style";
import Flag from "./Flag";
import BrFlag from "../assets/img/br-flag.png";
import UsaFlag from "../assets/img/usa-flag.png";
import MxFlag from "../assets/img/mx-flag.png";
import SchneiderLogo from "../assets/img/schneider-logo.jpeg";

function Header(){
  const { t, i18n } = useTranslation();
 
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <HeaderStyle>
      <header>
        <div className="logo-container">
          <img src={SchneiderLogo} />
        </div>
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
            image={MxFlag}
            onClick={() => changeLanguage('es-MX')}
          />
        </div>
      </header>
    </HeaderStyle>
  );
};

export default Header;
