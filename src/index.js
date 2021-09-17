import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './EjercicioUno';
import './index.css';






const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp  value={10} />, divRoot);