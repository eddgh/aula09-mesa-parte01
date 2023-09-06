/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState} from 'react';

export default function Pedido ({item}) {
    
    const [showOrder, setShowOrder] = useState (true)

    const handlerOrderCancel = () => {
        alert('Seu pedido foi cancelado.')
        document.getElementById('orderCancel').disabled = true;
        setShowOrder(false);
    }

return (
    <>
    {showOrder && <h1>Seu pedido: {item}</h1>}    
    <button id="orderCancel" onClick = {() => handlerOrderCancel()}>Cancelar pedido</button>
    </>
)
}