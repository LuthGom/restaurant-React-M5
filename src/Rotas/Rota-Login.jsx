import React from 'react'
import { AuthProvider } from "../context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "../components/ProtectedLayout/index";
import Login from "../components/Login/index";
import Dados from "../components/Dados";
import Entrega from "../components/Entrega"
function RotaLogin() {
    return ( 
        <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/dados"
              element={
                <ProtectedLayout>
                  <Dados />
                </ProtectedLayout>
              }
            />
            <Route path="/entrega" element={<Entrega />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
     );
}

export default RotaLogin;