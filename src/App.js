import logo from './logo.svg';
import './App.css';
import C01componente from '../componentes/C01componente';
import C02contador from '../componentes/C02contador';
import { Component } from 'react';

function App() {
  return (
    <div>
      <C01componente />
      <hr/>
      <C02contador />
    </div>
  );
}
export default App;
