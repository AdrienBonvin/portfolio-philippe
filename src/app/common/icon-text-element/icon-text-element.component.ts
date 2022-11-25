import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-text-element',
  templateUrl: './icon-text-element.component.html',
  styleUrls: ['./icon-text-element.component.css']
})
export class IconTextElementComponent {

  @Input() icon: string ='';

  @Input() text: string ='';


  constructor() { }


}
