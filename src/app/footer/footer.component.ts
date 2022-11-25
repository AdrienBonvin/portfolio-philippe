import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isPortable: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isPortable = window.innerWidth < 700;
  }

  public openLink(url: string){
    window.open(url, "_blank");
  }
}
