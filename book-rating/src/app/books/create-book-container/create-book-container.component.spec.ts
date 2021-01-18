import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookContainerComponent } from './create-book-container.component';

describe('CreateBookContainerComponent', () => {
  let component: CreateBookContainerComponent;
  let fixture: ComponentFixture<CreateBookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
