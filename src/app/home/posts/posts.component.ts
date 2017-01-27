import { Component, OnInit } from '@angular/core';
import { ShareButton, ShareProvider } from 'ng2-sharebuttons'
import { PosTService, ApiService } from '../../services'
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ PosTService, ApiService] 
})

export class PostsComponent implements OnInit{
    
    public posts: Observable<any[]>
    public facebookButton;
    public twitterButton
    constructor(private _postService: PosTService){}

    ngOnInit(){
      this.getPost()
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

    getPost(){
      this.posts = this._postService.getAllPosts()
    }
  
}