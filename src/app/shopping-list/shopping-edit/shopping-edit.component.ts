import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

//in the course he did the opposite of what i did. Used Output and passed a new Ingredient out
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
  }
  onAddClick(name: HTMLInputElement, amount: HTMLInputElement) {
    if(!name.value || !amount.value) return;
    console.log(name.value)
    this.slService.addIngredient({name: name.value, amount: parseInt(amount.value)})
  }
}
