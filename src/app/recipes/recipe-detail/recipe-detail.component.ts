import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeObj: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute) { }

  ngOnInit() {
    // this.recipeObj = {name: "Name", description: "Description", imagePath: "Image"}
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeObj = this.recipeService.getRecipe(this.id);
    })
  }
  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeObj.ingredients);
  }
}
