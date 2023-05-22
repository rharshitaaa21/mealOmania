import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

 recipes = Recipie[];
  constructor(private recipesService: RecipesService) {

     }

  ngOnInit() {
   this.recipes= this.recipesService.getAllRecipes();
  }


}
