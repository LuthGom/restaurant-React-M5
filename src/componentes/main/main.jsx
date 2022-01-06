import React,{useState} from "react"
import main from "./main.css"

function Main (){
const[contador,setContador]=useState(0)    
function clica (){
setContador((contador)=>{
    return contador +1
})
}
return(
    <main>
        <section className="principal">
         Luana
        </section>
        <h1>{contador}</h1>
        <button onClick={clica}>Faça seu pedido!</button>
        </main>
)
}
export default Main