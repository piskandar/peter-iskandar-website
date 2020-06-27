import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {BlogPost} from '../../model/blog-post';
import {PiskandarService} from '../piskandar.service';
import {EMPTY, Observable, of} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<BlogPost> {

  constructor(private piskandarService: PiskandarService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost> | Promise<BlogPost> | BlogPost {
    const date = route.paramMap.get('data');
    const slug = route.paramMap.get('slug');

    return this.piskandarService.getPost(date, slug).pipe(catchError(error   => {
        this.router.navigate(['code']);
        return EMPTY;
      }), mergeMap(something => {
        if (something) {
          return of(something);
        } else {
          this.router.navigate(['code']);
          return EMPTY;
        }
      })
    );
  }


}
