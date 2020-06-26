import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../model/blog-post';
import {PiskandarService} from '../api/piskandar.service';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  posts: BlogPost[];
  private momentInstance = moment();

  constructor(private piskandarService: PiskandarService) {

  }

  ngOnInit() {
    this.piskandarService.getPosts('Publish').subscribe(posts => {
      this.posts = posts;
    });
  }

  formatDate(date): string {
    return
  }

}
