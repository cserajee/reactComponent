import React, { useState } from "react";
import "./style.css";
import menu from "./data";
import Title from "./component/Title";
import Category from "./component/Category";
import MenuList from "./component/MenuList";

const menuCategory = ["all", ...new Set(menu.map((item) => item.category))];

const MenuApp = () => {
  const [menus, setMenu] = useState(menu);
  const [categories, setCategories] = useState(menuCategory);

  const cantegoryFilter = (category) => {
    if (category === "all") {
      setMenu(menu);
      return;
    }
    setMenu(menu.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Category categories={categories} cantegoryFilter={cantegoryFilter} />
        <MenuList menus={menus} />
      </section>
    </main>
  );
};

export default MenuApp;
