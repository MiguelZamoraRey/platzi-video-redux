import {createStore} from 'redux';

const initialState = [
    {
        "title":"Yann Tiersen",
    },
    {
        "title":"One More Time",
    },
    {
        "title":"Summer 78",
    }
];

const reducer = function(state,action){
    switch(action.type){
        case 'ADD_SONG':
            return [...state, action.payload]
        default:
            return state;
    }
}

const store = createStore(
    reducer,//reducer
    initialState,//initialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//enhancer
);

//elements
const $form = document.getElementById('form');

//render
function render(){
    const $container = document.getElementById('playlist');
    const playlist = store.getState();
    $container.innerHTML='';
    //playlist
    playlist.forEach((item)=>{
        const template = document.createElement('p');
        template.textContent = item.title;
        $container.appendChild(template);
    });
}

//primera carga
render();

//este sera el manejador del suscribe
function handleChange(){
    render();
}

//para actualizar el UI desde el state
store.subscribe(handleChange);

$form.addEventListener('submit', handleSubmit);

function handleSubmit (event){
    event.preventDefault();
    const data = new FormData($form);//esto lo que hace es guardar los datos del form
    const title = data.get('title');
    console.log(title);

    //Creamos el action
    store.dispatch({
        type:'ADD_SONG',
        payload:{
            title,
        }
    });
}