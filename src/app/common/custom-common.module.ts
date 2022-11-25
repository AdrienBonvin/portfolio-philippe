import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTextElementComponent } from './icon-text-element/icon-text-element.component';
import { SocialProofCommentComponent } from './social-proof-comment/social-proof-comment.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    IconTextElementComponent,
    SocialProofCommentComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    IconTextElementComponent,
    SocialProofCommentComponent
  ]
})
export class CustomCommonModule { }
