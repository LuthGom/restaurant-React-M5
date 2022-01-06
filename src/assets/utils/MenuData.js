import { ReactComponent as Burguer } from "./../../assets/icons/food.svg";
import { ReactComponent as Combos } from "./../../assets/icons/french-fries.svg";
import { ReactComponent as Sobremesas } from "./../../assets/icons/ice-cream.svg";
import { ReactComponent as Pizzas } from "./../../assets/icons/pizza.svg";
import { ReactComponent as Bebidas } from "./../../assets/icons/smothie.svg";

const menuData = [
  {
    category: "burguer",
    icon: <Burguer />,
    title: "Burguers",
    items: [
      {
        id: 1,
        img: require("./../../assets/images/burguer1.png"),
        alt: "Hambúrguer",
        title: "Triplo Burguer",
        description:
          "Pão, maionese, 3 carnes de 180g, alface, tomate, bacon e cebola roxa",
        price: 24.99,
      },
      {
        id: 2,
        img: require("./../images/burguer2.png"),
        alt: "Hambúrguer",
        title: "Chicken Burguer",
        description: "Pão, maionese, carne de frango, alface, tomate e queijo",
        price: 19.99,
      },
      {
        id: 3,
        img: require("./../images/burguer3.png"),
        alt: "Hambúrguer",
        title: "Picanha Burguer",
        description: "Pão, maionese, 1 hamburguer de picanha, alface e tomate",
        price: 29.99,
      },
      {
        id: 4,
        img: require("./../images/burguer4.png"),
        alt: "Hambúrguer",
        title: "Duplo Burguer",
        description:
          "Pão, maionese, 3 carnes de 180g, alface, tomate, bacon e cebola roxa",
        price: 27.99,
      },
    ],
  },
  {
    category: "combos",
    icon: <Combos />,
    title: "Combos",
    items: [
      {
        id: 5,
        img: require("./../images/combo1.png"),
        alt: "Combo Pizzas",
        title: "Combo Pizzas 1",
        description: "1 pizza peperoni e 1 pizza frango e catupiry",
        price: 79.99,
      },
      {
        id: 6,
        img: require("./../images/combo2.png"),
        alt: "Combo Lanches",
        title: "Combo Lanches 1",
        description:
          "1 hamburguer duplo, 1 guaraná lata e 1 milkshake chocolate",
        price: 49.99,
      },
    ],
  },
  {
    category: "sobremesas",
    icon: <Sobremesas />,
    title: "Sobremesas",
    items: [
      {
        id: 7,
        img: require("./../images/sobremesa1.png"),
        alt: "Sorvete",
        title: "Casquinha Mista",
        description: "Casquinha mista de creme e chocolate",
        price: 4.99,
      },
      {
        id: 8,
        img: require("./../images/sobremesa2.png"),
        alt: "Sorvete",
        title: "Casquinha de Morango",
        description: "Sorvete de morango na casquinha",
        price: 7.99,
      },
      {
        id: 9,
        img: require("./../images/sobremesa3.png"),
        alt: "Milkshake",
        title: "Milkshake de Nutella",
        description: "Milskahe de chocolate com nutella",
        price: 12.99,
      },
    ],
  },
  {
    category: "pizzas",
    icon: <Pizzas />,
    title: "Pizzas",
    items: [
      {
        id: 10,
        img: require("./../images/pizza1.png"),
        alt: "Pizza",
        title: "Calabresa",
        description: "Molho de tomate, calabresa e queijo",
        price: 29.99,
      },
      {
        id: 11,
        img: require("./../images/pizza2.png"),
        alt: "Pizza",
        title: "Frango e Catupiry",
        description: "Molho de tomate, frango e catupiry",
        price: 27.99,
      },
      {
        id: 12,
        img: require("./../images/pizza3.png"),
        alt: "Pizza",
        title: "4 Queijos",
        description:
          "Molho de tomate, mussarela, gorgonzola, parmesão e provolone",
        price: 31.99,
      },
    ],
  },
  {
    category: "bebidas",
    icon: <Bebidas />,
    title: "Bebidas",
    items: [
      {
        id: 13,
        img: require("./../images/bebida1.png"),
        alt: "Refrigerante",
        title: "Coca-cola lata",
        description: "Lata 350ml",
        price: 5.99,
      },
      {
        id: 14,
        img: require("./../images/bebida2.png"),
        alt: "Refrigerante",
        title: "Guaraná Lata",
        description: "Lata 350ml",
        price: 4.99,
      },
    ],
  },
];

export default menuData;
