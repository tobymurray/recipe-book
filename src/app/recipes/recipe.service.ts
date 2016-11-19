import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [new Recipe('10-Minute Energizing Oatmeal', 'This is a delicious complete breakfast and a perfect way to start your day!', 'http://www.whfoods.com/recipeimages/10-minute-energizing-oatmeal.jpg',
    [new Ingredient("Oats", 2), new Ingredient('Raisins', 10)]),
  new Recipe('Any Time Frittata', "Don't reserve this great frittata for breakfast; it's wonderful for lunch or dinner as well!", 'http://www.whfoods.com/recipeimages/summerfrittata.jpg', []),
  new Recipe('Breakfast Bagel', 'This healthy version of an egg sandwich is a great addition to your Healthiest Way of Eating any time of day.', 'http://www.whfoods.com/recipeimages/breakfastbagel.jpg', []),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
