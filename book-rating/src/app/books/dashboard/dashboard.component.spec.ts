import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let ratingMock;
  let book: Book;

  beforeEach(async () => {
    book = {
      isbn: '',
      title: '',
      description: '',
      price: 4,
      rating: 3
    };

    ratingMock = {
      // rateUp: () => book
      rateUp: b => b
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // Service ausmocken: Wenn BRS angefordert wird, dann ratingMock ausliefern
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp', () => {
    const rs = TestBed.inject(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough(); // Aufruf zum originalen "rs" durchleiten, nicht blockieren

    component.doRateUp(book);

    expect(rs.rateUp).toHaveBeenCalled();
  });
});
