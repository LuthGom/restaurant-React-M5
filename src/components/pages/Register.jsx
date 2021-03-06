import React from "react";
import { useNavigate } from "react-router-dom";
import CadastroForm from "../Cadastro/CadastroForm";
import styles from "../Cadastro/CadastroForm/CadastroForm.module.css";

function Cadastro() {
  const navigate = useNavigate();
  function CreatePost(cadastro) {
    setTimeout(() => {
      fetch("https://restaurant-client-api.herokuapp.com/clientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastro),
      })
        .then((resp) => resp.json())
        .then((data) => {
          localStorage.setItem("cpf", data.requisicao.cpf);
          navigate("/profile", { replace: true });
        })
        .catch((err) => console.log(err));
    }, 1000);
  }

  return (
    <div className={styles.container}>
      <h1>Formulário de Cadastro</h1>
      <CadastroForm handleSubmit={CreatePost} />
    </div>
  );
}

export default Cadastro;
