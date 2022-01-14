import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../Inputs/Text";
import Button from "../Button";
import styles from "./Profile.module.css";
function ProfileForm() {
  
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const cliente = localStorage.getItem("Client");
  console.log(cliente);


  const dados = JSON.parse(cliente);
  // console.log(dados);
  const [update, setUpdate] = useState(dados)
  function onClick(e) {
    if (!e.target.disabled && !e.target.value === { disabled }) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }
  
  
  const Api = () => {
      fetch(`https://restaurant-client-api.herokuapp.com/clientes/${update.cpf}`, {
          method: "DELETE",
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            
            navigate("/register");
        })
        .catch((err) => console.log(err));
    };

    const Patch = () => {
      fetch(`https://restaurant-client-api.herokuapp.com/clientes/${update.cpf}`, {
          method: "PATCH",
          body: JSON.stringify(update),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem("Client", JSON.stringify(update))
            
            // setLoading(false)
            navigate("/profile");
        })
        .catch((err) => console.log(err));
    };
    
    const submit = (e) => {
      e.preventDefault();
    };
    function handleChange(e) {
      e.preventDefault();
      setUpdate({ ...update, [e.target.name]: e.target.value });
    }
    return (
    <form onSubmit={submit}>
      <span className={styles.spans}>
        <button  type="submit" onClick={Api}>Excluir Conta</button>
        <div className={styles.profileForm}>
          <Text
            type="text"
            name="cpf"
            value={update.cpf}
            handleOnChange={handleChange}
            contentEditable="true"
            disabled={disabled}
          />
          <Text
            type="text"
            name="nome"
            value={update.nome}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="text"
            name="telefone"
            value={update.telefone}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="text"
            name="cep"
            value={update.cep}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="text"
            name="endereco"
            value={update.endereco}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="text"
            name="cidade"
            value={update.cidade}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="text"
            name="uf"
            value={update.uf}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="text"
            name="email"
            value={update.email}
            handleOnChange={handleChange}
            disabled={disabled}
          />
          <Text
            type="password"
            name="senha"
            value={update.senha}
            handleOnChange={handleChange}
            autocomplete="username"
            disabled={disabled}
          />
        </div>
        <div className={styles.profileButton}>
          <div style={{ display: !disabled ? "none" : "block" }}>
            <Button onClick={onClick} etiqueta="Editar informações"></Button>
          </div>
          <div>
            <Button onClick={Patch} etiqueta="Salvar informações"></Button>
          </div>
        </div>
      </span>
    </form>
  );
}

export default ProfileForm;
