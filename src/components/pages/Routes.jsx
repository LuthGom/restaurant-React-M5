import React, { useState } from "react";
import { HomeContainer } from "./../../assets/styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./../Sidebar";
import Navbar from "./../Navbar";
import HomeMenu from "./HomeMenu";
import Checkout from "./Checkout";
import Main from "./Main";
import Login from "./Login";
import Error from "./../Error";
import Footer from "./../Footer";
import Entrega from "../Entrega";
import Register from "./Register";
import Profile from "./Profile"
const Rotas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <HomeContainer>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} countCartItems={cartItems.length} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/menu"
              element={
                <HomeMenu cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
            <Route path="/deliverywaiting" element={<Entrega />} />
            <Route path="/login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
          <Footer />
        </HomeContainer>
      </Router>
    </>
  );
};

export default Rotas;
