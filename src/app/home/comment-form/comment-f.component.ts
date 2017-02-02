import { Component,
  Input, 
  Output,
  EventEmitter, 
} from '@angular/core';
import { NgForm } from '@angular/forms'
import { CommentData } from '../../services';
import { Angular2TokenService } from 'angular2-token';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'comment-form',
  templateUrl: './comment-f.component.html',
  styleUrls: ['./comment-f.component.scss']
})

export class CommentFormComponent{
  
  @Output() createComment = new EventEmitter();
  @Input() postId: number;

  newComment: CommentData = <CommentData>{} 

  constructor(
    private _commentService: Angular2TokenService,
    private _route: ActivatedRoute ){
      this._commentService.init({
        apiBase: 'http://localhost:3000'
      })
    }

  onComment(){
    // this._commentService.post('v1/posts/' + this.postId + '/comments', this.newComment)
    //   .subscribe(
    //     res => console.log(res),
    //     err => console.log(err)
    //   )
    // this.reset();
  }
  onclick(){
    this.createComment.emit()
  }
  reset(){
    this.newComment.body = '';
  }
}
