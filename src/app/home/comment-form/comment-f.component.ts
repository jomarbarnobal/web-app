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

  private _comment: CommentData = <CommentData>{};

  constructor(
    private _commentService: Angular2TokenService,
    private _route: ActivatedRoute ){}

  onComment(){
    this._commentService.post('v1/posts/' + this.postId + '/comments', this._comment)
        .subscribe(
          resp => console.log(resp),
          error => console.log('error', error),
      );
  }
}
