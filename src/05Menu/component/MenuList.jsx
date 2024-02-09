import React from "react";
import Menu from "./Menu";

const MenuList = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((menu) => {
        return <Menu key={menu.id} {...menu} />;
      })}
    </div>
  );
};

export default MenuList;
