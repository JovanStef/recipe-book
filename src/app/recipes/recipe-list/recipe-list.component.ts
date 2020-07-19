import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe(
    'Dummy',
    'Dummy',
    'https://sugargeekshow.com/wp-content/uploads/2019/10/chocolate-chip-muffins-featured.jpg'
  );
  constructor() {}

  ngOnInit(): void {}

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
