import { Component, OnInit} from '@angular/core';
import { PostService, ApiService } from '../../services';
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [ PostService, ApiService ]
})

export class PostsComoponent implements OnInit {
  
  posts: Observable<any[]>;

  constructor(
    private _postService: PostService
  ){} 
  
  ngOnInit(){
    this.posts = this._postService.getAllPost()
  }
}