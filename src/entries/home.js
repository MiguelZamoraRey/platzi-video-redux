import React from 'react';
import ReactDOM from 'react-dom';//renderiza

//Components siempre mayus
//import Category from './src/playlist/components/category.js';
import Home from '../pages/containers/home.js';
import data from '../api.json';

//nombre del lugar del componente
const homeContainer = document.getElementById('home-container');

//ReactDOM.render(<que voy a renderizar  props>, donde);
//las props son INMUTABLES no pueden cambiar mirar estados
ReactDOM.render(<Home data={data} />, homeContainer);