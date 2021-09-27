// um restrito modelo de estado em interface
import { ShoppingItem } from   './shopping-item.model';

export interface AppState {
    readonly shopping: Array<ShoppingItem>;
}