import {Component, OnInit} from '@angular/core';
import {BlogPage, BlogPost} from '../model/blog-post';
import {PiskandarService} from '../api/piskandar.service';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  page: BlogPage;
  private momentInstance = moment();
  currentPageNumber = 1;
  pageSize = 10;
  totalPages = 10;

  constructor(private piskandarService: PiskandarService) {

  }

  ngOnInit() {
    this.piskandarService.getPosts('Publish', this.currentPageNumber, this.pageSize).subscribe(posts => {
      this.page = posts;
      this.totalPages = this.page.totalPages;
    });
  }

  formatYear(d: Date) {
    return moment(d).format('yyyy');
  }

  formatMonth(d: Date) {
    return moment(d).format('MM');
  }

  formatDay(d: Date) {
    return moment(d).format('DD');
  }
}
