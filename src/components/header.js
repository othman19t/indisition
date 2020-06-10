import React from "react";
//stateless functional component
const Header = (props) => (
  <div className="header">
    <div className="header__con">
      <h1 className="header__title">{props.title}</h1>
      <p className="header__subtitle">{props.subtitle}</p>
    </div>
  </div>
);

export default Header;
