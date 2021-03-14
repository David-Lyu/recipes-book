import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

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

  onEditRecipe() {
    // this.router.navigate(['/recipes/edit/' + this.id])
    this.router.navigate(['../','edit', this.id], {relativeTo: this.route})
  }
}
