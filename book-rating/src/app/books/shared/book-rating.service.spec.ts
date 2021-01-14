import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService); // früher: TestBed.get()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book', () => {});
  
  it('should rate down a book', () => {});
  
  it('should not rate higher than 5', () => {});
  
  it('should not rate lower than 1', () => {});
});
