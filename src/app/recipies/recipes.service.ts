import { Injectable } from '@angular/core';
import { Recipie } from './recipies.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipies: Recipie[]=[{
    id:'r1',
    title: 'Swedish French Fries',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    ingredients: ['French Fries','Spices','Vegetable']
  },
  {
    id:'r2',
    title: 'Italian Pasta',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    ingredients: ['Pasta','Mayo','Vegetables']
  },
  {
    id:'r3',
    title: 'Cornotto',
    imageUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    ingredients: ['Ice-Cream','Oreo','Choco-chips']
  },
  {
    id:'r4',
    title: 'Cornotto',
    imageUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    ingredients: ['Ice-Cream','Oreo','Choco-chips']
  },
  {
    id:'r5',
    title: 'Cornotto',
    imageUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    ingredients: ['Ice-Cream','Oreo','Choco-chips']
  },
  {
    id:'r6',
    title: 'Cornotto',
    imageUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    ingredients: ['Ice-Cream','Oreo','Choco-chips']
  },
  {
    id:'r7',
    title: 'Cornotto',
    imageUrl: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    ingredients: ['Ice-Cream','Oreo','Choco-chips']
  },
  {
    id:'r8',
    title: 'Schnitzel',
    imageUrl: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    ingredients: ['French Fries','Spices','Vegetable']
  }]

  constructor() { }
  getAllRecipes(){
    return[...this.recipies];
  }
  getRecipe(recipeId:string){
    return    {
        ...this.recipies.find(recipe =>{
      return recipe.id == recipeId ;
    })
  };
  }
}
