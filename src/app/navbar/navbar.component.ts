import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  topOfScreen: boolean = true;
  fontColor: string = "white"
  pathLogo: string = "../../assets/logo.png"

  constructor() { }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 10) {
      this.topOfScreen = false;
      this.fontColor = "#1e60aa"
      this.pathLogo = "../../assets/logo.png"
    } else {
      this.topOfScreen = true;
      this.fontColor = "white"
      this.pathLogo = "../../assets/logo.png"
    }
  }

}
