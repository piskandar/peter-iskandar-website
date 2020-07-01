import {Component, OnInit} from '@angular/core';
import {BlogPage, BlogPost} from '../model/blog-post';
import {PiskandarService} from '../api/piskandar.service';
import * as moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router'; // add this 1 of 4

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  page: BlogPage;
  private momentInstance = moment();

  pageSize = 10;
  totalPages = 10;
  loading = false;
  pageNumber = 0;
  totalItems = 0;

  constructor(private piskandarService: PiskandarService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.loading = true;
    this.route.queryParams.subscribe(params => {
      if (params.p) {

        this.pageNumber = +params.p;
      } else {
        this.pageNumber = 0;
      }
      this.piskandarService.getPosts('Publish', this.pageNumber, this.pageSize).subscribe(posts => {
        this.page = posts;
        this.totalPages = this.page.totalPages;
        this.totalItems = this.page.totalItems;
        this.loading = false;
      });
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

  goToNewerPage() {
    this.pageNumber--;
    if (this.pageNumber < 0) {
      this.pageNumber = 0;
    }
    this.router.navigate(['/code'], {queryParams: {p: this.pageNumber}});
  }


  goToOlderPage() {
    this.pageNumber++;
    if (this.pageNumber > this.totalPages - 1) {
      this.pageNumber = this.totalPages - 1;
    }
    this.router.navigate(['/code'], {queryParams: {p: this.pageNumber}});

  }

  goToPage(pageNumber: number) {
    if (pageNumber < 0) {
      return;
    }
    if (pageNumber >= this.totalPages) {
      return;
    }

    this.pageNumber = pageNumber;
    this.router.navigate(['/code'], {queryParams: {p: this.pageNumber}});
  }

  isNewerEnabled() {
    return this.pageNumber !== 0;
  }

  isOlderEnabled() {
    return this.pageNumber + 1 !== this.totalPages;
  }
}
