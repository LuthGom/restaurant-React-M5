import React from "react";
import Text from "../../login-cadastro/Inputs/Text";
import Radio from "../../login-cadastro/Inputs/Radio";
import Paragrafo from "../../login-cadastro/Paragrafo";
import Button from "../../login-cadastro/Button";
import styles from "./Dados.module.css";
import { useNavigate } from "react-router-dom";

function Dados() {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/entrega", {replace: true});
  }
  return (
    <form onSubmit={submit} className={styles.FormDados}>
      <div className={styles.ContainerPai}>
        <h1>Voltar</h1>
        <div className={styles.DivFilhoUm}>
          <Paragrafo paragrafo="Seus Dados"></Paragrafo>
          <Text etiqueta="Nome" placeholder="Digite seu nome" />
          <Text etiqueta="Celular" placeholder="Digite seu número" />
        </div>
        <div className={styles.DivFilhoDois}>
          <Paragrafo paragrafo="Entrega"></Paragrafo>
          <div className={styles.DivFilhoTres}>
            <Radio etiqueta="Retirar na Loja" name="delivery" />
            <Radio etiqueta="Delivery"  name="delivery"/>
            <div className={styles.DivFilhoQuatro}>
              <Radio etiqueta="endereço da api" />
              <a href="">Editar endereço</a>
            </div>
          </div>
          <div className={styles.address}>
            <a href="">Adicionar endereço</a>
          </div>
        </div>
        <div className={styles.pagamento}>
          <Paragrafo paragrafo="Pagamento"></Paragrafo>
          <p>Método de pagamento</p>
          <div className={styles.DivFilhoCinco}>
            <Radio etiqueta="Cartão" name="pagamento"/>
            <Radio etiqueta="Dinheiro" name="pagamento"/>
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
