//creador de acciones

//Sirve para evitar typos y errores e los call a las actions

export function openModal(mediaId){
    return {
        type:'OPEN_MODAL',
        payload:{
            mediaId
        }
    }
}

export function closeModal(){
    return {
        type:'CLOSE_MODAL'
    }
}

export function searchEntities(query){
    return {
        type:'SEARCH_ENTITIES',
        payload:{
            query,
        }
    }
} 