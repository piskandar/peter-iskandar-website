import {Inject, Injectable} from '@angular/core';
import {PISKANDAR_API} from './piskandar-api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogPage, BlogPost} from '../model/blog-post';

@Injectable()
export class PiskandarService {
  constructor(@Inject(PISKANDAR_API) private http: HttpClient) {

  }

  getPosts(status, pageNumber, pageSize): Observable<BlogPage> {
    return this.http.get<BlogPage>(`/api/v1/posts?status=${status}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  getPost(date, slug): Observable<BlogPost> {
    return this.http.get<BlogPost>(`/api/v1/posts/${date}/${slug}`);
  }
}
