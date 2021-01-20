import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit(): void {
    /* Synchroner Weg
    const isbn = this.route.snapshot.paramMap.get('isbn');
    console.log(isbn);
    */

    // import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
   this.book$ = this.route.paramMap.pipe(
     map(params => params.get('isbn')),
     distinctUntilChanged(),
     switchMap(isbn => this.bs.getSingle(isbn))
   );

  }

}
