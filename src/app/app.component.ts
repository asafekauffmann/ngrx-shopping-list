import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {v4 as uuid } from 'uuid';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-state.model';

import { ShoppingItem } from './store/models/shopping-item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Iniciar no constructor importar store from ngrx, para iniciar Add Store From AppState

  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: ''};

  constructor(private store: Store<AppState>) { 
    // this.shoppingItems$ = this.store.select(store => store.shopping);
    this.shoppingItems$ = this.store.select('shopping');
  }

  ngOnInit(): void {
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = {id: '', name: ''};
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
