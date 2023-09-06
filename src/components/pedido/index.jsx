/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from 'react';

export default function Pedido ({item}) {
    
    const [exibirPedido, setExibirPedido] = useState (true)

    const handlerExibirPedido = () => {
        alert('Seu pedido foi cancelado.')
        document.getElementById('cancela').disabled = true;
        setExibirPedido(false);
    }

return (
    <>
    {exibirPedido && <h1>Seu pedido: {item}</h1>}    
    <button id="cancela" onClick = {() => handlerExibirPedido()}>Cancelar pedido</button>
    </>
)
}