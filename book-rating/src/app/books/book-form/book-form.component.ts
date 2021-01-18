import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.submitBook.emit(null);
  }

}
