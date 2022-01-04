import React from 'react';
import Product from './Product/Product';

function Main(props) {
  const { items, onAdd } = props; 
  let prato = [] 
  items.map(item =>{
    return item.map(prod=>{
      return prato.push(prod)       
    })
  })

//const [prato , setPrato] = useState([])
 
  return (
    <main>
      <h2>Products</h2>
      <div>
        {prato.map(item => {
          return <Product key={item.id} items={item} onAdd={onAdd}></Product>
        })}
      </div>
    </main>
  );
}

export default Main