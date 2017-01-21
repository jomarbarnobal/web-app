import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {
  
  path: string = '/v1/posts';
  
  constructor(
    private _postService: ApiService
  ){}

  getAllPosts(id: number, comments: string){
    return this._postService.get(`${this.path}/${id}/${'comments'}/${id}`)
  }
 

}