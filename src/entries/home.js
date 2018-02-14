import React from 'react';
import ReactDOM, {render} from 'react-dom';//renderiza

//Components siempre mayus
//import Category from './src/playlist/components/category.js';
import Home from '../pages/containers/home.js';

//redux imports
import {Provider} from 'react-redux';//remplaza al subscribe de redux

import {createStore,applyMiddleware} from 'redux';
//importamos un nuevo archivo donde guardaremos el reducer
import reducer from '../reducers/index';
import {Map as map} from 'immutable';

//middleware externos que vamos a importar
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';//para manejar tareas asincronas en las acciones

/*/COMO CONSTUIR UN MIDDLEWARE
function logger({getState, dispatch}){//get STore y dispatch de params
    return (next)=>{//metodo para despachar siguente middleware
        return (action)=>{//recibe action y llama a next action
            return next(action);
        }
    }
}//*/

/*/para los middleware o enchancers
function logger({getState, dispatch}){//get STore y dispatch de params
    return (next)=>{//metodo para despachar siguente middleware
        return (action)=>{//recibe action y llama a next action
            console.log('Enviando', action);
            const value = next(action);
            console.log('Ejecutado, nuevo estado:',getState().toJS())
            return value;
        }
    }
}//*/

//Igual resumido para ECMASCRIPT 6 --> al final nos quedamos con el externo
/*const logger = ({getState, dispatch}) => next => action => {
    console.log('Enviando', action);
            const value = next(action);
            console.log('Ejecutado, nuevo estado:',getState().toJS())
            return value;
}*/

//creamos el store de redux
const store = createStore(
    reducer,//reducer,
    map(),//viene de la funcion de immutable
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
            //,otherMiddleware,...
        )
    )
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