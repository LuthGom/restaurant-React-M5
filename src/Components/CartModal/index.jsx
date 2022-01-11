import React from "react";
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal-modal')

function CartModal(children) {
  // const { cartItem } = props;
  // const [ observacao, setObservacao] = useState("")
  
  return ReactDOM.createPortal (
        <>
        <div>
          <h1>Voltar</h1>
          <button type="button">X</button>
          <div>
            {children}

          </div>
        </div>
        </>,
        portalRoot
      );
  
  
}

export default CartModal;
