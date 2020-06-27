import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
  styleUrls: ['./page-control.component.scss']
})
export class PageControlComponent implements OnInit {

  @Input()
  totalPages: number;

  @Input()
  currentPage: number;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

}
