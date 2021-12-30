import React, { Component } from "react";

let productList = [
  {
    name: "Macarrão Bolonhesa",
    price: 50,
    info: "Macarrão com molho a bolonhesa",
  },
  {
    name: "Arroz a Piamontese",
    price: 60,
    info: "Arroz a piamontese com filet miogn",
  },
  { name: "Lasanha", price: 40, info: "Lasanha com molho branco" },
];

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    //Eventos
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
  add() {
    this.setState({
      qty: this.state.qty + 1,
    });
  }
  remove() {
    this.setState({
      qty: this.state.qty - 1,
    });
  }
  showInfo() {
    alert(this.props.info);
  }
  calc(){
      let valor = (this.state.qty)*(this.props.price)
      return valor
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <button onClick={this.add}>+1</button>
            <div className="colprice">{this.state.qty}</div>
            <button onClick={this.remove} disabled={this.state.qty < 1}>
              -1
            </button>
          </div>
          <div className="row">
            <div className="col">
              <h4>
                {this.props.name}: R$ {this.props.price}
              </h4>
              <button onClick={this.showInfo}>Informações</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>R$ {this.calc}</h3>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: "",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }
  render() {
    if (!this.state.productList) return <p>Carregando...</p>;
    let component = this;
    let products = this.state.productList.map(function (product) {
      return (
        <Product
          name={product.name}
          price={product.price}
          info={product.info}
        />
      );
    });
    return (
      <div>
        <h1>Seu Pedido</h1>
        {products}
      </div>
    );
  }
}

export default ProductList;
