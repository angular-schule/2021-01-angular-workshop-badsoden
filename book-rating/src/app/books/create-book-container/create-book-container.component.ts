import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book-container',
  templateUrl: './create-book-container.component.html',
  styleUrls: ['./create-book-container.component.scss']
})
export class CreateBookContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(book: Book): void {
    console.log(book);
  }

}
