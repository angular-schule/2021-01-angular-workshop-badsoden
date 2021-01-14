import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService); // früher: TestBed.get()

    // Arrange
    book = {
      title: '',
      isbn: '',
      description: '',
      price: 1,
      rating: 3
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book', () => {
    book.rating = 3;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book', () => {
    book.rating = 3;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    book.rating = 4;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
