import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {

  constructor(private scullyService: ScullyRoutesService) { }

  posts$: Observable<ScullyRoute[]> | undefined;

  ngOnInit(): void {
    this.posts$ = this.scullyService.available$.pipe(
      map(posts => posts.filter(post => post.title))
    );
  }

}
