/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function Pedido() {
    const [item, setItem] = useState('');

    useEffect(() => {
        document.getElementById('orderCancel').disabled = true;
        setTimeout(() => {
            setItem('Pizzas');
            document.getElementById('orderCancel').disabled = false;
            console.log("O componente foi atualizado!")
        }, "2000")

        return (() => {
            alert('Seu pedido foi cancelado.')
        })

    }, [item])


    return (
        <>
            <h1>Seu pedido: {item}</h1>
        </>
    )
}