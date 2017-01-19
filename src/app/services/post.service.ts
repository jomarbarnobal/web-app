import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class PostService {
  
  path: string = '/v1/posts';
  
  constructor(
    private _postService: ApiService
  ){}

  getAllPost(){
    return this._postService.get(this.path)
  }

  
}