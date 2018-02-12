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

const store = createStore(
    (state)=>state,//reducer
    initialState,//initialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),//enhancer
);

const playlist = store.getState();

//elements
const $form = document.getElementById('form');
const $container = document.getElementById('playlist');

//playlist
playlist.forEach((item)=>{
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);
});

//form
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