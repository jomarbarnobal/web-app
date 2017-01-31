import { Component, Input } from '@angular/core';


@Component({
  selector: 'comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss'] 
})

export class CommentCardComponent {
  @Input() comment = [];
}