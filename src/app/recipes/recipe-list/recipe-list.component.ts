import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipe = new Recipe("Dummy", "Dummy", "https://pixabay.com/static/uploads/photo/2016/08/15/10/01/face-1594936_960_720.png");
  // recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
  }

}
