/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Pedido from './components/pedido'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [showOrder, setShowOrder] = useState(true)

  const handlerOrderCancel = () => {
    setShowOrder(false);
  }

  return (
    <main>
      {showOrder && <Pedido />}

      <button
        onClick={() => handlerOrderCancel()}>Cancelar pedido
      </button>
    </main>
  )

}

export default App
