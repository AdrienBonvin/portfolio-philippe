import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-proof-comment',
  templateUrl: './social-proof-comment.component.html',
  styleUrls: ['./social-proof-comment.component.css']
})
export class SocialProofCommentComponent {

  @Input() picture: string = "";

  @Input() name: string = "";

  @Input() comment: string = "";

  @Input() info: string = "";


  constructor() { }

}
