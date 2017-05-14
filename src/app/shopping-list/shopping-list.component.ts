import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [
    new Ingredient('arroz', 10),
    new Ingredient('cebolla', 30),
    new Ingredient('jitomate', 20)
    ];

  constructor() { }

  ngOnInit() {
  }

}
