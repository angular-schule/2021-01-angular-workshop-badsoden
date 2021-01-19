import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(0, Validators.min(3))
    });
  }

  isInvalid(name: string): boolean {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }

  hasError(name: string, errorCode: string): boolean {
    const control = this.bookForm.get(name);
    return control.hasError(errorCode) && control.touched;
  }

  submitForm(): void {
    this.submitBook.emit(null);
  }

}
