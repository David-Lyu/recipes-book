import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Meat',1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A Second', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Buns',2),
      new Ingredient('Meat',1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe (index: number): Recipe {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addMultIngredients(ingredients);
  }
}
