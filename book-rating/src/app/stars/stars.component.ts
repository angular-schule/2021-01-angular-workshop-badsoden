import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'br-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() rating: number;

  constructor() { }

  ngOnInit(): void {
  }

  getRating(): any[] {
    return  new Array(this.rating);
  }

}
