import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit(): void {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        price: 36.90,
        rating: 5
      },
      {
        isbn: '456',
        title: 'React',
        description: 'Das andere Framework',
        price: 32.90,
        rating: 3
      }
    ];
  }

}

