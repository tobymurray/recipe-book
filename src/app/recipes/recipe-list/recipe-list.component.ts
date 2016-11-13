import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('10-Minute Energizing Oatmeal', 'This is a delicious complete breakfast and a perfect way to start your day!', 'http://www.whfoods.com/recipeimages/10-minute-energizing-oatmeal.jpg', []),
    new Recipe('Any Time Frittata', "Don't reserve this great frittata for breakfast; it's wonderful for lunch or dinner as well!", 'http://www.whfoods.com/recipeimages/summerfrittata.jpg', []),
    new Recipe('Breakfast Bagel', 'This healthy version of an egg sandwich is a great addition to your Healthiest Way of Eating any time of day.', 'http://www.whfoods.com/recipeimages/breakfastbagel.jpg', []),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
