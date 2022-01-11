import React from "react";
import Text from "../Inputs/Text";
import Radio from "../Inputs/Radio";
import Paragrafo from "../Title/Paragrafo";
import Button from "../Button/Button";
import styles from "./Dados.module.css";
function Dados() {
  return (
    <form action="" className={styles.FormDados}>
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
            <Radio etiqueta="Retirar na Loja" />
            <Radio etiqueta="Delivery" />
            <div className={styles.DivFilhoQuatro}>
              <Radio etiqueta="endereço da api" />
              <a href="">Editar endereço</a>
            </div>
          </div>
          <span className={styles.address}>
            <a href="">Adicionar endereço</a>
          </span>
        </div>
        <div className={styles.pagamento}>
          <Paragrafo paragrafo="Pagamento"></Paragrafo>
          <p>Método de pagamento</p>
          <div className={styles.DivFilhoCinco}>
            <Radio etiqueta="Cartão" />
            <Radio etiqueta="Dinheiro" />
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
