import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { loadBooks } from '../store/book.actions';
import { selectAllBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // books: Book[];

  loading$ = this.store.pipe(select(selectBooksLoading));
  books$ = this.store.pipe(select(selectAllBooks));

  constructor(private rs: BookRatingService, private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }

  doRateUp(book: Book): void {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }
  
  doRateDown(book: Book): void {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book): void {
    /*this.books = this.books
      .map(book => ratedBook.isbn === book.isbn ? ratedBook : book);*/
  }

}

