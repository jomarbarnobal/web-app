import { Component, OnInit } from '@angular/core';
import { ShareButton, ShareProvider } from 'ng2-sharebuttons'
import { PosTService, ApiService } from '../../services'
import { Angular2TokenService} from 'angular2-token';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ PosTService, ApiService] 
})

export class PostsComponent implements OnInit{

    posts: any[] = [];

    public facebookButton;
    public twitterButton
    constructor(private _postService: PosTService){}

    ngOnInit(){
      this.getPost()
      this.facebookB();
      this.twitterB();
    }

    public getPost(){
       this._postService.getAllPosts()
        .subscribe(
          data => this.posts = data
          )
      }

    public facebookB(){
      this.facebookButton = new ShareButton(
        ShareProvider.FACEBOOK,              //choose the button from ShareProvider
        "<span><i class='fa fa-facebook'></i></span>", //set button template
        'facebook'                           //set button classes
      );
    }
      
    public twitterB(){
      this.twitterButton = new ShareButton(
        ShareProvider.TWITTER,              //choose the button from ShareProvider
        "<span><i class='fa fa-twitter'></i></span>", //set button template
        'twitter'                           //set button classes
      );   
   }
     
  
}