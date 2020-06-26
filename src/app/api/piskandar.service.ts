import {Inject, Injectable} from '@angular/core';
import {PISKANDAR_API} from './piskandar-api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BlogPost} from '../model/blog-post';

@Injectable()
export class PiskandarService {
  constructor(@Inject(PISKANDAR_API) private http: HttpClient) {

  }

  getPosts(status): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`/api/v1/posts?status=${status}`);
  }
}
