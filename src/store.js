import {createStore, applyMiddleware, combineReducers} from 'redux'
import Thunk from 'redux-thunk'

function characterListReducer(state = {lista:[],next:"",}, action = {}){

    //Atualiza lista de personagens com uma nova pagina
    if(action.type === 'CHAR_LIST_INCREMENT'){
        return {
            next:action.data.next,
            lista: [...state.lista,...action.data.results]
        }
    }
    return state
}


const store = createStore(
    combineReducers({characters: characterListReducer}), 
    applyMiddleware(Thunk)
)

export default store