// No reducer devemos inicialo com um estado inicial do produto.
import { ShoppingItem } from '../models/shopping-item.model';
import { ShoppingAction, ShoppingActionTypes } from './../actions/shopping.actions';

const initialState: Array<ShoppingItem> = [
    {
        id: "155-43-3222d",
        name: 'Diet Coke',
    }
];

// Agora criar a função reducer na qual receberá o seu estado inicial e ação necessária

export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState, 
    action: ShoppingAction 
) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload]; // retorna nova versão do estado
        default:
            return state;
            
    }

}