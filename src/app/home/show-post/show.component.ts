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
    comments = []
    facebookButton;
    twitterButton;
    id: number;
    constructor(
        private _router: ActivatedRoute,
        private _postService: PosTService){}


    onCreateComment(_comment){
        this.comments.push(_comment)
        console.log('hi');
    }

    ngOnInit(){
        this._router.params.subscribe(params => {
            this.id = + params['id'];
        })

        this._postService.getPost(this.id).subscribe(
            post => this.post = post,
            comments => this.comments = comments
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


