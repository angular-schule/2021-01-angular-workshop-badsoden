import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    function producer(obs) {
      obs.next(1);
      obs.next(2);

      setTimeout(() => {
        obs.next(3);
        obs.complete();
      }, 2000);
    }

    const myObs$ = new Observable(producer);

    const observer = {
      next: e => console.log('N', e),
      error: err => console.error(err),
      complete: () => console.log('C')
    };

    myObs$.subscribe(observer);
    myObs$.subscribe(e => console.log('CB', e));

    // producer(observer);

  }
}
