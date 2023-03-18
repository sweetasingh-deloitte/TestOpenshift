import React from "react";
const NavItem = (props) => {
  return (
    <div className="NavItem">
      <img src={props.img} alt="" />
      <p className="Nav-content">{props.content}</p>
    </div>
  );
};
export default NavItem;
