/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function Pedido() {
    const [item, setItem] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setItem('Pizzas');
            console.log("O componente foi atualizado!")
        }, "2000")

        return (() => {
            alert('Seu pedido foi cancelado.')
        })

    }, [])


    return (
        <>
            <h1>Seu pedido: {item}</h1>
        </>
    )
}