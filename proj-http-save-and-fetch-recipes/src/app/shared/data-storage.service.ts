import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import {map} from 'rxjs/operators'
@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(private http: HttpClient, private recipeServ: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeServ.getRecipes();
    this.http.put('https://recipeproj-7f3d0-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe((res)=> console.log(res));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>('https://recipeproj-7f3d0-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipes => {
      //this is the map on the recipes array object
      return recipes.map(recipe => {
        console.log(recipe.ingredients)
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
      });
    })).subscribe((res)=>{
      console.log(res);
      this.recipeServ.setRecipes(res);
    });
  }
}
