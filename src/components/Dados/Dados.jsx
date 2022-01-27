import React, { useState, useEffect } from "react";
import Text from "../Inputs/Text";
import Radio from "../Inputs/Radio";
import Paragrafo from "../Paragrafo";
import Button from "../Button";
import styles from "./Dados.module.css";
import { useNavigate } from "react-router-dom";

function Dados() {
  function handleChecked(e) {
    if (e.target.checked && e.target.value === "retirada") {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }

  function handleClick(e) {
    if (e.target.click) setAddEndereco(true);
  }
  const [checked, setChecked] = useState(true);
  const [addEndereco, setAddEndereco] = useState(false);
  const navigate = useNavigate();
  const cliente = localStorage.getItem("Cliente");

  const dados = JSON.parse(cliente);
  console.log(dados);
  const submit = (e) => {
    e.preventDefault();
    navigate("/deliverywaiting", { replace: true });
  };
  return (
    <form onSubmit={submit} className={styles.FormDados}>
      <div className={styles.ContainerPai}>
        <h1>Voltar</h1>
        <div className={styles.DivFilhoUm}>
          <Paragrafo paragrafo="Seus Dados"></Paragrafo>

          <Text
            etiqueta="Nome"
            id={dados.id}
            placeholder="Digite seu nome"
            value={dados.cliente.nome}
          />

          <Text
            etiqueta="Telefone"
            placeholder="Digite seu número"
            value={dados.cliente.telefone}
          />
        </div>
        <div className={styles.DivFilhoDois}>
          <Paragrafo paragrafo="Entrega"></Paragrafo>
          <div className={styles.DivFilhoTres}>
            <Radio
              etiqueta="Retirar na Loja"
              name="delivery"
              value="retirada"
              onChange={handleChecked}
            />
            <Radio
              value="delivery"
              etiqueta="Delivery"
              name="delivery"
              checked="checked"
              onChange={handleChecked}
            />
          </div>
          <div
            className={`${styles.DivFilhoQuatro} ${styles.address}`}
            style={{ display: checked ? "block" : "none" }}
          >
            <input id="address" type="checkbox" onChange={!handleChecked} />
            <h6>
              Edite!
            </h6>
            <p contentEditable="true" className={styles.api_endereco}>
              {dados.cliente.endereco}, {dados.cliente.cidade}
            </p>
          </div>
          <div
            className={styles.address}
            style={{ display: checked ? "block" : "none" }}
          >
            <p
              href=""
              onClick={handleClick}
              style={{ display: addEndereco ? "none" : "block" }}
            >
              Adicionar endereço
            </p>
            <div style={{ display: addEndereco ? "flex" : "none" }}>
              <label>Novo Endereço:</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className={styles.pagamento}>
          <Paragrafo paragrafo="Pagamento"></Paragrafo>
          <p>Método de pagamento</p>
          <div className={styles.DivFilhoCinco}>
            <Radio etiqueta="Cartão" name="pagamento" />
            <Radio
              etiqueta="Dinheiro"
              name="pagamento"
              checked="defaultChecked"
            />
          </div>
        </div>
        <div className={styles.DivFilhoSeis}>
          <Button etiqueta="Confirmar Pedido"></Button>
        </div>
      </div>
    </form>
  );
}

export default Dados;
