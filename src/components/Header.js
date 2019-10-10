import React from "react";
import logo from "../assets/img/facebook-1.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Facebook" />
      <a href="#">Meu perfil</a>
    </div>
  );
}

export default Header;
