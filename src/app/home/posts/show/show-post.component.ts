import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { PostService } from '../../../services';
import { Observable } from 'rxjs/Rx'
// import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './show-post.component.html',
})

export class SinglePostComponent implements OnInit{
  post = []
  id: number;
  private sub: any;
  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService
  ){}
  
  ngOnInit(){
    this.sub = this._route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this._postService.getPost(this.id)
      .subscribe(
        post => this.post = post,
    )
  }
}

