import { Component, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PosTService, ApiService } from '../../services';
import { ShareButton, ShareProvider } from 'ng2-sharebuttons';
import { Observable } from 'rxjs/Rx';
import { CommentData } from '../../services';
import { Angular2TokenService } from 'angular2-token';


@Component({
  templateUrl: './show.component.html',
  styleUrls: [`./show.component.scss`],
  providers: [ PosTService, ApiService]
})

export class ShowPostComponent{
    private _comment: CommentData = <CommentData>{};
    post = []; 
    comments = [];
    facebookButton;
    twitterButton;
    comment;
    description = [];
    id: number;
    
    private sub: any;
    
    constructor(
        private _route: ActivatedRoute,
        private _postService: PosTService,
        private _commentService: Angular2TokenService
    ){
        this._commentService.init({
            apiBase: 'http://localhost:3000' 
        })
    }

    onComment(){
        this._commentService.post('v1/posts/' + this.id + '/comments', this._comment)
            .subscribe(
                error => console.log(error),
                resp => console.log(resp)
        )
    }

    ngOnInit(){
        this.sub = this._route.params.subscribe(params => {
            this.id = +params['id'];
        })

        this._postService.getPost(this.id)
        .subscribe(
            res => this.post = res,
            error => this.comments = error
        )

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

}