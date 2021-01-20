import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;

  results$: Observable<Book[]>;
  loading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.results$ = this.searchControl.valueChanges.pipe(
      filter((e: string) => e.length >= 3),
      debounceTime(1000),
      tap(() => this.loading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.loading = false),
    );
  }

  /*
  Anforderungen Typeahead:
  - während der Eingabe suchen
  - Suchbegriff mindestens 3 Zeichen
  - erst abschicken, wenn Nutzer Finger still hält
  - this.bs.search(term)
  - Bücher anzeigen (ganz simpel!)
  - Zusatz: AsyncPipe
  - Zusatz: Ladeanzeige
  - Zusatz: Meldung anzeigen, wenn keine Bücher vorhanden sind
  */
}
