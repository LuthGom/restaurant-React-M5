import React,{useState} from "react";
import main from "./main.css";
import savings from '../../img/logoo.png';
import Button from "../layout/Button";

function Main (){
return(
    <main>
        <section className="main_container">
        <div className="sidebar">
        <h1>Bem-vindo ao <span>Tasty Food</span>
        </h1>
        <p>O que você precisa está aqui. <br/> Faça o seu pedido que entregamos em minutos onde você estiver!</p>
        
        <button className="botao" onClick>Fazer pedido</button>
         </div>

         <div className="content" ><img src={savings} alt="Food"/></div>
         
        </section>
         
        
        </main>
)
}
export default Main