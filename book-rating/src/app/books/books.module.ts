import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { CreateBookContainerComponent } from './create-book-container/create-book-container.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    BookDetailsComponent,
    BookFormComponent,
    CreateBookContainerComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  // exports: [
  //   DashboardComponent
  // ]
})
export class BooksModule { }
