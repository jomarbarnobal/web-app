import { Component, OnInit} from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { ActivatedRoute, Params } from '@angular/router'
import { NgForm } from '@angular/forms';
import { PostData, PosTService, ApiService } from '../services'


@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [ PosTService, ApiService ]
})

export class NewPostComponent{
  private _currentId: number;
  private _postData: PostData = <PostData>{};
  
  constructor(
    private _tokenService: Angular2TokenService,
    private _createPost: PosTService,
    private router: ActivatedRoute
    ){
    this._tokenService.init({
        apiBase: 'https://blog-api-app.herokuapp.com'
    })
   }
  
  
  submitPost(form: NgForm){
    this._createPost.post(form.value).subscribe(
      // res => console.log(res),
      // error => console.log(error),
      res => { this._tokenService.currentUserData = res.json().data}
    )

  }

  
  ngOnInit(){
  }
}