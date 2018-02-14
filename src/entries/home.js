import React from 'react';
import ReactDOM, {render} from 'react-dom';//renderiza

//Components siempre mayus
//import Category from './src/playlist/components/category.js';
import Home from '../pages/containers/home.js';

//redux imports
import {Provider} from 'react-redux';//remplaza al subscribe de redux

import {createStore} from 'redux';
//importamos un nuevo archivo donde guardaremos el reducer
import reducer from '../reducers/index';
import {Map as map} from 'immutable';

//creamos el store de redux
const store = createStore(
    reducer,//reducer,
    map(),//viene de la funcion de immutable
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//enhancer,
);

//nombre del lugar del componente
const homeContainer = document.getElementById('home-container');

//ReactDOM.render(<que voy a renderizar  props>, donde);
//las props son INMUTABLES no pueden cambiar mirar estados
ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>
    , homeContainer);