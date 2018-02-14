import {OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES} from '../action-types/index';//costante con los nombres

//creador de acciones

//Sirve para evitar typos y errores e los call a las actions

export function openModal(mediaId){
    return {
        type:OPEN_MODAL,
        payload:{
            mediaId
        }
    }
}

export function closeModal(){
    return {
        type:CLOSE_MODAL
    }
}

export function searchEntities(query){
    return {
        type:SEARCH_ENTITIES,
        payload:{
            query,
        }
    }
} 


//gracias a redux-thunk nos va a permitir retornar una funcion
export function searchAsyncEntities(query){
    return (dispatch)=>{
        //fetch()
        //xHR
        //superAgent
        //ajax
        //etc..

        setTimeout(()=>{//provocando async
            dispatch(searchEntities(query))
        },5000)        
    }
} 