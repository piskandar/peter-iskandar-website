import { Component, OnInit } from '@angular/core';
import {BlogPost, blogPosts} from '../model/blog-post';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  posts: BlogPost[] = blogPosts;

  constructor() { }

  ngOnInit() {
  }

}
