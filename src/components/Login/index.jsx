import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import Button from "../../login-cadastro/Button";
import Text from "../../login-cadastro/Inputs/Text";
import Paragrafo from "../../login-cadastro/Paragrafo";

import styles from "./Login.module.css";

const Login = () => {
  const [login, setLogin] = useState({ email: "", senha: "" });

  const auth = useAuth();
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();

    try {
      await auth.authenticate(login.email, login.senha);

      navigate.push("/profile");
    } catch (error) {
      throw new Error("Invalid email or senha");
    }
  };

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }
  return (
    <section className={styles.section}>
      <span>
        <form onSubmit={submit} className={styles}>
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
          </div>
          <div>
            <Button type="primary" htmlType="submit" etiqueta="Login" className={styles.button} />
          </div>
        </form>
      </span>
    </section>
  );
};

export default Login;
