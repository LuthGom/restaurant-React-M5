import React from "react";

function Product(props) {
  const { items, onAdd } = props;
  
  return (
    <div>
      <h3>{items.title}</h3>
      <div>${items.price}</div>
      <div>
        <button onClick={() => onAdd(items)}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
