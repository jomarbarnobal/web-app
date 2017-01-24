import { Component, OnInit, Input } from '@angular/core';
import {ShareButton, ShareProvider} from "ng2-sharebuttons";
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostsComponent implements OnInit {
  facebookButton;
  twitterButton;
  
  posts: Observable<any[]>;

  constructor(
    private _postService: PostService,
  ){} 
  
  ngOnInit(){
    this.getPosts();

    this.facebookButton = new ShareButton(
        ShareProvider.FACEBOOK,              //choose the button from ShareProvider
        "<span><i class='fa fa-facebook'></i></span>", //set button template
        'facebook'                           //set button classes
      );

    this.twitterButton = new ShareButton(
        ShareProvider.TWITTER,              //choose the button from ShareProvider
        "<span><i class='fa fa-twitter'></i></span>", //set button template
        'twitter'                           //set button classes
      );   

  }
  
  getPosts(){
    this.posts = this._postService.getAllPosts()
  }
}