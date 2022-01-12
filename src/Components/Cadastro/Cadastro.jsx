import React from "react";
// import {useNavigate} from "react-router-dom";

import CadastroForm from "./CadastroForm";
function Cadastro() {
  function createPost(cadastro) {
    fetch("https://restaurant-client-api.herokuapp.com/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cadastro),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // navigate("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <h1>Formulário de Cadastro</h1>
      <CadastroForm handleSubmit={createPost} />
    </div>
  );
}

export default Cadastro;
