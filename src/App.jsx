/* eslint-disable no-unused-vars */
import Pedido from './components/pedido'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [item, setItem] = useState('');

  useEffect(() => {
    document.getElementById('cancela').disabled = true;
    
    setTimeout(() => {
      setItem('Pizzas');
      console.log("O componente foi atualizado!")
    }, "2000");

    !item ? "" : document.getElementById('cancela').disabled = false;


  },[item])

  return (
    <main>
    {<Pedido item={item} />}      
    </main>
  )

}

export default App
