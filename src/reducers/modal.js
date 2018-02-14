import { fromJS } from 'immutable';

const initialState = fromJS({
    visibility: false,
    mediaId: null,
});

function modal(state =initialState, action){
    switch(action.type){
        //añadimos a nuestro estado a parte del data una búsqueda
        case 'OPEN_MODAL':
           return state.merge({
               visibility: true,
               mediaId: action.payload.mediaId,
            })//para enviar mas de un set
        case 'CLOSE_MODAL':
            return state.set('visibility',false);
        default:
            return state;
    }
}

export default modal;