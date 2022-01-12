import React, { useState } from "react";
import { HomeContainer } from "./../../assets/styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import Main from "./Main";
import HomeMenu from "./HomeMenu";
import AboutUs from "./AboutUs";
import Checkout from "./Checkout";
import Signup from "./Signup";
import Error from "./../Error";

const Rotas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(cartItems)
  return (
    <>
      <Router>
        <HomeContainer>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} countCartItems={cartItems.length} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<HomeMenu cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signin" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes> 
        </HomeContainer>
      </Router>
    </>
  );
};

export default Rotas;
