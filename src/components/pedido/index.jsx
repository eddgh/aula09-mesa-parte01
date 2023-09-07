/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function Pedido() {
    const [item, setItem] = useState('');
    const cancelaPedido = () => {
        alert('Seu pedido foi cancelado.')
    }

    // const [showOrder, setShowOrder] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setItem('Pizzas');
            console.log("O componente foi atualizado!")
        }, "2000")

        return (() => {
            cancelaPedido();
        })

    }, [])


    return (
        <>
            <h1>Seu pedido: {item}</h1>
        </>
    )
}