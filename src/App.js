import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  function aumentarNumero () {
    setNumero(numero+1)
  }
  
  function disminuirNumero () {
    setNumero(numero-1)
  }

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <p>Numero: {numero}</p>
      <button onClick={aumentarNumero}>AUMENTAR</button> <button onClick={disminuirNumero}>DISMINUIR</button>
    </div>
  );
}

export default App;
