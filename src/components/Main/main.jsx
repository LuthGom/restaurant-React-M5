import React from "react";
import  "./main.css";
import savings from '../../assets/images/logo.png';
import Button from "../layout/Button";

function Main (){
return(
    <main>
        <section className="main_container">
        <div className="sidebar">
        <h1>Bem-vindo ao <span>Tasty Food</span>
        </h1>
        <p>O que você precisa está aqui. <br/> Faça o seu pedido que entregamos em minutos onde você estiver!</p>
        
        <Button to="/menu" textBtn="Fazer Pedido"></Button>
         </div>

         <div className="content" ><img src={savings} alt="Food"/></div>
         
        </section>
         
        
        </main>
)
}
export default Main