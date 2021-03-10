import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeObj: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeObj = {name: "Name", description: "Description", imagePath: "Image"}
  }
  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeObj.ingredients);
  }
}
