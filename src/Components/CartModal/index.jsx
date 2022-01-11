import React from "react";
import {
  Container,
  Modal,
  Head,
  Content,
  ObsField,
  Botao,
} from "./ModalElements";
import { FaMinus, FaPlus, FaRegWindowClose } from "react-icons/fa";
import { ButtonQty, QtyOrder, Img, QtyPrice, Obs } from "../Cart/CartElements";

function CartModal({
  onClose = () => {},
  children,
  onAdd,
  onRemove,
  comment,
  setComment,
}) {
  return (
    <Modal>
      <Container>
        <Head>
          <h1>{children.title}</h1>
          <FaRegWindowClose onClick={onClose} />
        </Head>

        <Content>
          <Img src={`${children.img}`} alt={`${children.alt}`} />
          <div>{children.title}</div>
          <Obs>{children.description}</Obs>
          <QtyOrder>
            <ButtonQty onClick={() => onAdd(children)}>
              <FaPlus />
            </ButtonQty>
            {children.qty}
            <ButtonQty onClick={() => onRemove(children)}>
              <FaMinus />
            </ButtonQty>
          </QtyOrder>
          <label htmlFor="">Observação:</label>
          <ObsField
            placeholder="Ex: tirar salada, bebida sem gelo..."
            onChange={(ev) => setComment(ev.target.value)}
            value={comment}
          />
          <QtyPrice>R${children.qty * children.price.toFixed(2)} </QtyPrice>
        </Content>

        <Botao onClick={onClose}>Salvar Alteração</Botao>
      </Container>
    </Modal>
  );
}

export default CartModal;
