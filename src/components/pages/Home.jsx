import React, { useState } from "react";
import { HomeContainer } from "./../../assets/styles/globalStyles";
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import CategoryMenu from "./../CategoryMenu";
import Menu from "./../Menu";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HomeContainer>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <CategoryMenu active={active} setActive={setActive} />
        <Menu active={active} setActive={setActive} />
      </HomeContainer>
    </>
  );
};

export default Home;
