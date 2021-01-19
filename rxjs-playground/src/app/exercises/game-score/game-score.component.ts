import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject, of } from 'rxjs';
import { scan, reduce, tap } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new ReplaySubject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /**
     * Wir entwickeln ein spannendes Browser-Spiel!
     * Jetzt fehlt nur noch der Code, um den aktuellen und den finalen Punktestand zu ermitteln...
     */

    /******************************/
    // Aktueller Punktestand
    this.score$.pipe(
      scan((acc, item) => acc + item, 0)
    ).subscribe(score => this.currentScore = score);
    
    // Finaler Punktestand
    this.score$.pipe(
      // tap(e => console.log('XXX', e)),
      reduce((acc, item) => acc + item, 0)
    ).subscribe(score => this.finalScore = score);

    /******************************/

    of(
      'SETNAMEFERDINAND',
      'SETCITYLEIPZIG',
      'SETNAMEFERDI',
      'SETFRAMEWANGULAR',
      'XXXXXXX',
      'SETCITYBOCHUM'
    ).pipe(
      scan((acc, item) => {
        switch (item) {
          case 'SETNAMEFERDINAND': return { ...acc, name: 'Ferdinand' };
          case 'SETNAMEFERDI': return { ...acc, name: 'Ferdi' };
          case 'SETCITYLEIPZIG': return { ...acc, city: 'Leipzig' };
          case 'SETCITYBOCHUM': return { ...acc, city: 'Bochum' };
          case 'SETFRAMEWANGULAR': return { ...acc, framework: 'Angular' };
          default: return acc;
        }
      }, { name: 'Frank', city: 'Dresden' })
    ).subscribe(e => console.log(e));



    /******************************/


    this.score$.subscribe({
      next: e => this.logStream$.next(e),
      complete: () => this.logStream$.next('✅ COMPLETE')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
