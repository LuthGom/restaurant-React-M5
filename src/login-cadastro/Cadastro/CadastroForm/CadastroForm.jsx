import React, { useState } from "react";
import Text from "../../Inputs/Text";
import Button from "../../Button";
import styles from "./CadastroForm.module.css";

function CadastroForm({ handleSubmit }) {
  const [cadastro, setCadastro] = useState(1);
  const submit = (e) => {
    e.preventDefault();

    handleSubmit(cadastro);
  };
  function handleChange(e) {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={submit}>
      <span>
        <div className={styles.DivForm}>
          <Text
            type="text"
            etiqueta="Digite seu CPF"
            name="cpf"
            placeholder="apenas números"
            value={cadastro.cpf ? cadastro.cpf : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite seu nome completo"
            name="nome"
            placeholder="ex: João da Silva Santos"
            value={cadastro.nome ? cadastro.nome : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite o seu número de celular"
            name="telefone"
            placeholder="ex.; (xx) xxxxx-xxxx"
            value={cadastro.telefone ? cadastro.telefone : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite o seu CEP"
            name="cep"
            placeholder="ex.: xxxxx-xxx"
            value={cadastro.cep ? cadastro.cep : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite o seu Endereço"
            name="endereco"
            placeholder="ex.: Nome da Rua, número da casa"
            value={cadastro.endereco ? cadastro.endereco : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite a sua Cidade"
            name="cidade"
            placeholder="cidade que mora atualmente"
            value={cadastro.cidade ? cadastro.cidade : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite a sua UF"
            name="uf"
            placeholder="ex.: RJ, SP, RO, etc"
            value={cadastro.uf ? cadastro.uf : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="text"
            etiqueta="Digite o seu e-mail"
            name="email"
            placeholder="ex.: exemplo@exemplo.com"
            value={cadastro.email ? cadastro.email : ""}
            handleOnChange={handleChange}
          />
          <Text
            type="password"
            etiqueta="Digite uma senha"
            name="senha"
            placeholder="Deve contar uma letra Maiuscula e 1 caractere pelo menos"
            value={cadastro.senha ? cadastro.senha : ""}
            handleOnChange={handleChange}
            autocomplete="username"
          />
        </div>
        <div className={styles.DivButton}>
          <Button etiqueta="Finalizar Cadastro"></Button>
        </div>
      </span>
    </form>
  );
}
export default CadastroForm;
