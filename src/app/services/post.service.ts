import { Injectable } from '@angular/core';
import { PostData } from './post.data'
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class PosTService{
  
  path: string = '/v1/posts';

  constructor(private _postsService: ApiService){}

  getAllPosts(){
    return this._postsService.get(this.path)
  }

  getPost(id: number){
    return this._postsService.get(`${this.path}/${id}`)
  }

  post(post: PostData): Observable<any>{
    return this._postsService.post(this.path, post)
  }
}