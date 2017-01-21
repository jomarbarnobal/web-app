import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {
  
  path: string = '/v1/posts';
  
  constructor(
    private _postService: ApiService
  ){}

  getAllPosts(){
    return this._postService.get(this.path)
  }
  
  getPost(id: number){
    return this._postService.get(`${this.path}/${id}`)
  }
}