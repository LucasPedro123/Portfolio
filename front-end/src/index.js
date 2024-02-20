// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Assets/index.css"; // Importe o arquivo CSS diretamente
import { BrowserRouter } from 'react-router-dom';
import { CursosContextProvider } from "./Context/CarrinhoContexto";

ReactDOM.render(
  <React.StrictMode>
    <CursosContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CursosContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);