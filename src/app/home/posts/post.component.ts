import { Component, OnInit, Input } from '@angular/core';
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

  posts: Observable<any[]>;

  constructor(
    private _postService: PostService,
  ){} 
  
  ngOnInit(){
    this.getPosts();
  }
  
  getPosts(){
    this.posts = this._postService.getAllPosts()
  }
}