import schema from '../schemas/index';
import {fromJS} from 'immutable';
import {SEARCH_ENTITIES} from '../action-types/index';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search:'',
})

function data(state = initialState, action){
    switch(action.type){
        //añadimos a nuestro estado a parte del data una búsqueda
        case SEARCH_ENTITIES:{
            return state.set('search',action.payload.query)
            //forma de setear el inmutable state
        }
        default:
            return state;
    }
}

export default data;