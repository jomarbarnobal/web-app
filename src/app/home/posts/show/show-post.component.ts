import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../../services';
import {ShareButton, ShareProvider} from "ng2-sharebuttons";


@Component({
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss'],
})

export class SinglePostComponent implements OnInit{
  post = []
  comments = []
  facebookButton;
  description = [];

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

    this.facebookButton = new ShareButton(
        ShareProvider.FACEBOOK,              //choose the button from ShareProvider
        "<img src='../../assets/img/custom/single-twitter.svg'> facebook",    //set button template
        'facebook'                           //set button classes
      );
  }
}

