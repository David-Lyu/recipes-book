import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

//in the course he did the opposite of what i did. Used Output and passed a new Ingredient out
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInput: ElementRef;
  // @ViewChild('amountInput') amountInput: ElementRef;
  @Input() ingredients: Ingredient[];
  constructor() { }

  ngOnInit() {
  }
  onAddClick(name: HTMLInputElement, amount: HTMLInputElement) {
    if(!name.value || !amount.value) return;
    console.log(name.value)
    this.ingredients.push({name: name.value, amount: parseInt(amount.value)})
  }
}
