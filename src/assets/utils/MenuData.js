// import { ReactComponent as Burguer } from "./../../assets/icons/food.svg";
// import { ReactComponent as Combos } from "./../../assets/icons/french-fries.svg";
// import { ReactComponent as Sobremesas } from "./../../assets/icons/ice-cream.svg";
// import { ReactComponent as Pizzas } from "./../../assets/icons/pizza.svg";
// import { ReactComponent as Bebidas } from "./../../assets/icons/smothie.svg";

//Mudar os ids dos pratos, para ids unicos.
const menuData = [
  {
    category: "burguer",
    // icon: <Burguer />,
    title: "Burguers",
    items: [
      {
        id: 1,
        // img: require("./../../assets/images/burguer1.png"),
        alt: "comidinha",
        title: "Triplo Burguer",
        description:
          "Pão, maionese, 3 carnes de 180g, alface, tomate, bacon e cebola roxa",
        price:  32,
      },
      {
        id: 2,
        // img: require("./../images/burguer2.png"),
        alt: "comidinha",
        title: "Chicken Burguer",
        description: "Pão, maionese, carne de frango, alface, tomate e queijo",
        price:  16,
      },
      {
        id: 3,
        // img: require("./../images/burguer3.png"),
        alt: "comidinha",
        title: "Picanha Burguer",
        description: "Pão, maionese, 1 hamburguer de picanha, alface e tomate",
        price:  31,
      },
      {
        id: 4,
        // img: require("./../images/burguer4.png"),
        alt: "comidinha",
        title: "Duplo Burguer",
        description:
          "Pão, maionese, 3 carnes de 180g, alface, tomate, bacon e cebola roxa",
        price:  27,
      },
    ],
  },
  // {
  //   category: "combos",
  //   // icon: <Combos />,
  //   title: "Combos",
  //   items: [
  //     {
  //       id: 1,
  //       // img: require("./../images/combo1.png"),
  //       alt: "comidinha",
  //       title: "Combo Pizzas 1",
  //       description: "1 pizza peperoni e 1 pizza frango e catupiry",
  //       price:  55,00",
  //     },
  //     {
  //       id: 2,
  //       // img: require("./../images/combo2.png"),
  //       alt: "comidinha",
  //       title: "Combo Lanches 1",
  //       description:
  //         "1 hamburguer duplo, 1 guaraná lata e 1 milkshake chocolate",
  //       price:  58,00",
  //     },
  //   ],
  // },
  // {
  //   category: "sobremesas",
  //   // icon: <Sobremesas />,
  //   title: "Sobremesas",
  //   items: [
  //     {
  //       id: 1,
  //       // img: require("./../images/sobremesa1.png"),
  //       alt: "comidinha",
  //       title: "Casquinha Mista",
  //       description: "Casquinha mista de creme e chocolate",
  //       price:  4,99",
  //     },
  //     {
  //       id: 2,
  //       // img: require("./../images/sobremesa2.png"),
  //       alt: "comidinha",
  //       title: "Casquinha de Morango",
  //       description: "Sorvete de morango na casquinha",
  //       price:  7,99",
  //     },
  //     {
  //       id: 3,
  //       // img: require("./../images/sobremesa3.png"),
  //       alt: "comidinha",
  //       title: "Milkshake de Nutella",
  //       description: "Milskahe de chocolate com nutella",
  //       price:  12,00",
  //     },
  //   ],
  // },
  // {
  //   category: "pizzas",
  //   // icon: <Pizzas />,
  //   title: "Pizzas",
  //   items: [
  //     {
  //       id: 1,
  //       // img: require("./../images/pizza1.png"),
  //       alt: "comidinha",
  //       title: "Calabresa",
  //       description: "Molho de tomate, calabresa e queijo",
  //       price:  25,00",
  //     },
  //     {
  //       id: 2,
  //       // img: require("./../images/pizza2.png"),
  //       alt: "pizza",
  //       title: "Frango e Catupiry",
  //       description: "Molho de tomate, frango e catupiry",
  //       price:  27,00",
  //     },
  //     {
  //       id: 3,
  //       // img: require("./../images/pizza3.png"),
  //       alt: "comidinha",
  //       title: "4 Queijos",
  //       description:
  //         "Molho de tomate, mussarela, gorgonzola, parmesão e provolone",
  //       price:  29,00",
  //     },
  //   ],
  // },
  // {
  //   category: "bebidas",
  //   // icon: <Bebidas />,
  //   title: "Bebidas",
  //   items: [
  //     {
  //       id: 1,
  //       // img: require("./../images/bebida1.png"),
  //       alt: "comidinha",
  //       title: "Coca-cola lata",
  //       description: "Lata 350ml",
  //       price:  5,80",
  //     },
  //     {
  //       id: 2,
  //       // img: require("./../images/bebida2.png"),
  //       alt: "comidinha",
  //       title: "Guaraná Lata",
  //       description: "Lata 350ml",
  //       price:  5,10",
  //     },
  //   ],
  // },
];

export default menuData;
