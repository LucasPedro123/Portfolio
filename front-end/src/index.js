import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from "./Assets/index.css"
import {BrowserRouter} from 'react-router-dom'
import {CursosContextProvider} from "./Context/CarrinhoContexto"
import {Routes} from './Routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CursosContextProvider>
      <BrowserRouter>
        <div className={styles}>
          <App />
        </div>
      </BrowserRouter>
    </CursosContextProvider>
    
  </React.StrictMode>
);

