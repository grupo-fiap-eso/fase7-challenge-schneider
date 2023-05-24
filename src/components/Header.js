
import React from "react";
import { HeaderStyle } from "../assets/css/style";
import Flag from "./Flag";
import BrFlag from "../assets/img/br-flag.png";
import UsaFlag from "../assets/img/usa-flag.png";
import MxFlag from "../assets/img/mx-flag.png";
import SchneiderLogo from "../assets/img/schneider-logo.jpeg";

function Header(){

  return (
    <HeaderStyle>
      <header>
        <div className="logo-container">
          <img src={SchneiderLogo} />
        </div>
        <div className="flags-container">
          <Flag image={BrFlag} />
          <Flag image={UsaFlag} />
          <Flag image={MxFlag} />
        </div>
      </header>
    </HeaderStyle>
  );
};

export default Header;
