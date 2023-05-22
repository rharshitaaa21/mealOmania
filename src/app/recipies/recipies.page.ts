import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  recipies: Recipie[]=[{
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
    title: 'Schnitzel',
    imageUrl: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    ingredients: ['French Fries','Spices','Vegetable']
  }]
  constructor() { }

  ngOnInit() {
  }


}
