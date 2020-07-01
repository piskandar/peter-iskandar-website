import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page-control',
  templateUrl: './page-control.component.html',
  styleUrls: ['./page-control.component.scss']
})
export class PageControlComponent implements OnInit {

  @Input() newerEnabled = true;
  @Input() olderEnabled = true;

  @Output() goToNewer = new EventEmitter();
  @Output() goToOlder = new EventEmitter();
  @Output() goToPage = new EventEmitter<number>();

  @Input()
  totalPages: number;

  @Input()
  currentPage: number;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    const array = new Array();
    for (let j = 1; j < i + 1; j++) {
      array.push(j);
    }
    return array;
  }
  newer() {
    this.goToNewer.emit();
  }

  older() {
    this.goToOlder.emit();
  }

  page(pageNumber) {
    this.goToPage.emit(pageNumber - 1);
  }
}
