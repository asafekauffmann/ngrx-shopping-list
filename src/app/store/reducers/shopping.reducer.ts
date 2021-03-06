// No reducer devemos inicialo com um estado inicial do produto.
import { ShoppingItem } from '../models/shopping-item.model';
import { AddItemAction, ShoppingAction, ShoppingActionTypes } from './../actions/shopping.actions';

import { Action, createReducer, on } from '@ngrx/store';


const initialState: Array<ShoppingItem> = [
    {
        id: "155-43-3222d",
        name: 'Diet Coke',
    }
];



//Teste aqui
const reducer = createReducer(
    initialState,
    on(AddItemAction, (state, action) => {
       return [...state, action.payload]
    })
 );

 export function ShoppingReducer(state: Array<ShoppingItem> | undefined, action: Action) {
    return reducer(state, action);
  }







// Agora criar a função reducer na qual receberá o seu estado inicial e ação necessária
/*export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState, 
    action: ShoppingAction 
) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            console.log(action.type, action.payload);

            return [...state, action.payload]; // retorna nova versão do estado

        case ShoppingActionTypes.DELETE_ITEM:
            console.log(action.type, action.payload);
            
            return state.filter(item => item.id !== action.payload);

        default:
            return state;
    }

}
*/