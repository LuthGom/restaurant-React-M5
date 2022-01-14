import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Text from "../Inputs/Text";
import Paragrafo from "../Paragrafo";
import styles from "./Login.module.css";
import { ButtonLink } from "../layout/Button/ButtonElements";
import Loading from "../Loading";
const Login = () => {
  const [login, setLogin] = useState({ email: "", senha: "" });
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const Api = () => {
    fetch(`https://restaurant-client-api.herokuapp.com/clientes/login`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("Cliente", JSON.stringify(data));
        setLoading(false);
        navigate("/checkout");
      })
      .catch((err) => console.log(err));
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    Api();
  };

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }
  if (loading) {
    return (
      <div style={{ display: "block" }}>
        <Loading />
      </div>
    );
  } else {
    return (
      <section className={styles.section}>
        <span className={styles.spans}>
          <form onSubmit={submit} className={styles.forms}>
            <div className={styles.email}>
              <Paragrafo paragrafo="E-mail" />
              <Text
                type="text"
                name="email"
                placeholder="Digite seu e-mail cadastrado"
                handleOnChange={handleChange}
              />
            </div>
            <div className={styles.senha}>
              <Paragrafo paragrafo="Senha" />
              <Text
                type="password"
                name="senha"
                placeholder="digite sua senha"
                handleOnChange={handleChange}
              />

              <h3>{message}</h3>
            </div>
            <div className={styles.divButton}>
              <Button type="primary" htmlType="submit" etiqueta="Login" />
              <p>Ou</p>
              <ButtonLink to={"/register"}>Cadastre-se aqui!</ButtonLink>
            </div>
          </form>
        </span>
      </section>
    );
  }
};

export default Login;
