import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A test Recipe',
  //     'this is a test',
  //     'https://www.foodandwine.com/thmb/nAWUAeEQ9Ece9R1WHohzsWQyg2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-julias-favorite-roast-chicken-hero-35a06f97d63e4bd0829f7694baeca588.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('Frech Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Another test Recipe',
  //     'this is a test',
  //     'https://www.foodandwine.com/thmb/nAWUAeEQ9Ece9R1WHohzsWQyg2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-julias-favorite-roast-chicken-hero-35a06f97d63e4bd0829f7694baeca588.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
