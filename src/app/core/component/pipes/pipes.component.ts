import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  name = "psvel";
  date = new Date();
  searchTerm!: string;
  append: string = " ";
  filter: any;
  constructor() {

  }
  users: any[] = [
    { name: 'psvel', gender: 'M' },
    { name: 'arun', gender: 'M' },
    { name: 'surya', gender: 'f' }
  ];
  results = [
    {
      id: 1,
      summary: 'These are the results for the searched text'
    },
    {
      id: 2,
      summary: 'Here are some more results you searched for'
    },
    {
      id: 3,
      summary: 'Searching for answers, are we?'
    },
    {
      id: 4,
      summary: ' What more could you ask for?'
    }
  ]
  updateSearch(e: any) {
    console.log(e);
    this.searchTerm = e.target.value
  }
  updateAppend(e: any) {
    console.log(e);
    this.append = e.target.value
  }
  updateFilter(e: any) {
    console.log(e);
    this.filter = e.target.value
  }

  Add() {
    this.users.push({ name: this.name, gender: "M" });
    this.users = [...this.users, ({ name: this.name, gender: "M" })];
    console.log(this.users);
  }
}



