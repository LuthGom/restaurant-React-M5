import React from "react";
import { Link } from "react-router-dom";

function NavLogin() {
  return (
    <ul>
      <li>
        <Link to="/login">Login/Cadastro</Link>
      </li>
    </ul>
  );
}

export default NavLogin;
