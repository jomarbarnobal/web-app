import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PosTService, ApiService } from '../../services';
import { ShareButton, ShareProvider } from 'ng2-sharebuttons';
import { Observable } from 'rxjs/Rx';


@Component({
  templateUrl: './show.component.html',
  styleUrls: [`./show.component.scss`],
  providers: [ PosTService, ApiService]
})

export class ShowPostComponent{
    post = []; 
    comments = [];
    facebookButton;
    twitterButton;
    description = [];
    id: number;

    private sub: any;

    constructor(
        private _route: ActivatedRoute,
        private _postService: PosTService
    ){}

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