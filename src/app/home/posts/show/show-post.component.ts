import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { PostService } from '../../../services';


@Component({
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})

export class SinglePostComponent implements OnInit{
  post = []
  comments = []

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
        comment => this.comments = comment
    )
  }
}

