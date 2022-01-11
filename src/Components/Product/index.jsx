import React, { useState } from "react";
import {
  RowsOrder,
  Order,
  ButtonQty,
  QtyOrder,
  Img,  
  QtyPrice,
  Icons,
  Line,
  Obs,
} from "../Cart/CartElements";
import { FaMinus, FaPlus, FaEdit } from "react-icons/fa";
import CartModal from "../CartModal";

function Product(props) {
  const { item, onAdd, onRemove } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <RowsOrder>
      <Order>
        <QtyOrder>
          <ButtonQty onClick={() => onAdd(item)}>
            <FaPlus />
          </ButtonQty>
          {item.qty}
          <ButtonQty onClick={() => onRemove(item)}>
            <FaMinus />
          </ButtonQty>
        </QtyOrder>

        <Img src={`${item.img}`} alt={`${item.alt}`} />

        <div>
          <div>{item.title}</div>
          {comment.length !== 0 && (
          <Obs>{comment}</Obs>)}

        </div>

        <QtyPrice>R${item.qty * item.price.toFixed(2)} </QtyPrice>

        <Icons>
          <FaEdit onClick={() => setIsModalVisible(true)} />
          {isModalVisible ? (
            <CartModal
              onAdd={onAdd}
              onRemove={onRemove}
              children={item}
              onClose={() => setIsModalVisible(false)}
              comment={comment}
              setComment={setComment}
            ></CartModal>
          ) : null}
        </Icons>

      </Order>

      <Line />
    </RowsOrder>
  );
}

export default Product;
