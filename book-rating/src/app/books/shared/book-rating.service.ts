import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    return null;
  }

  rateDown(book: Book): Book {
    return null;
  }
}
