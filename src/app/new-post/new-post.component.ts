import { Component} from '@angular/core';
import { Angular2TokenService, Angular2TokenOptions } from 'angular2-token';
import { ActivatedRoute, Params } from '@angular/router'
import { NgForm } from '@angular/forms';
import { PostData, PosTService, ApiService } from '../services'


@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [ PosTService, ApiService ]
})

export class NewPostComponent{
  _user;
  private _postData: PostData = <PostData>{};
  
  constructor(
    private _tokenService: Angular2TokenService,
    private _createPost: PosTService,
    private router: ActivatedRoute
    ){
    this._tokenService.init({
        apiBase: 'http://localhost:3000'
    })
   }
  
  
  submitPost(form: NgForm){
    this._createPost.post(form.value).subscribe(
      res => console.log(res),
      error => console.log(error),
    )
  }
 
}