import { Component, OnInit, Input, Output} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PosTService, ApiService } from '../../services';
import { ShareButton, ShareProvider } from 'ng2-sharebuttons';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { CommentData } from '../../services';
import { Angular2TokenService } from 'angular2-token';


@Component({
  templateUrl: './show.component.html',
  styleUrls: [`./show.component.scss`],
  providers: [ PosTService, ApiService]
})

export class ShowPostComponent implements OnInit{
    post = [];
    comments: any[] = [];
    facebookButton;
    twitterButton;
    comment = []
    id: number;
    constructor(
        private _router: ActivatedRoute,
        private _postService: PosTService,
        private _commentService: Angular2TokenService ){
    }

    ngOnInit(){
        this.urlId();
        this.getPost()
        this.facebookB();
        this.twitterB();            
    }

    public getPost(){
        this._postService.getPost(this.id)
        .subscribe(
        post => this.post = post,
        comments => this.comments = comments,
        )
    }
    
    public urlId(){
        this._router.params.subscribe(params => {
            this.id = + params['id'];
        })
    }

    public twitterB(){
        this.twitterButton = new ShareButton(
            ShareProvider.TWITTER,              //choose the button from ShareProvider
            "<span><i class='fa fa-twitter'></i></span>", //set button template
            'twitter'                           //set button classes
        );
    }

    public facebookB(){
        this.facebookButton = new ShareButton(
        ShareProvider.FACEBOOK,              //choose the button from ShareProvider
            "<span><i class='fa fa-facebook'></i></span>", //set button template
            'facebook'                           //set button classes
        );
    }
   
    commentCreated(comment){
        this._commentService.post('v1/posts/'+ this.id+ '/comments', comment)
            .subscribe(comment => this.post.comments.push(comment.json()))
            console.log(comment)
    }
}


