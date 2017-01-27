import { Injectable } from '@angular/core';
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

}