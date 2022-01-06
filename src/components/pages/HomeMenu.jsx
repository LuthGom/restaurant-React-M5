import React, { useState } from "react";
import CategoryMenu from "../CategoryMenu";
import Menu from "../Menu";

const HomeMenu = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <CategoryMenu active={active} setActive={setActive} />
      <Menu active={active} setActive={setActive} />
    </>
  );
};

export default HomeMenu;
