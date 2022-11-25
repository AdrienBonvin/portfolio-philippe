import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  listePhotos : Photo[] = [];

  photo: Photo = {
    id: 1,
    photo: "../../../assets/about/photo1.jpg"
  };

  isPortable: boolean = false;

  ngOnInit(): void {
    this.isPortable = window.innerWidth < 700;
    let i: number = 1;
    while(i <= 8) {
      this.listePhotos.push({
        id: i,
        photo: "../../../assets/about/photo"+i+".jpg"
      })
      i++;
    }
    this.photo= this.listePhotos[0];
  }

  public changePhoto(direction: string) {
    console.log('On entre dans la méthode par: ')
    if (direction === 'previous' && this.photo.id > 1) {
      console.log('un, et on prends : ' + (this.photo.id -2))
      this.photo = this.listePhotos[this.photo.id -2];
    } else if (direction === 'previous') {
      this.photo = this.listePhotos[this.listePhotos.length-1];
    } else if (direction === 'next' && this.photo.id < (this.listePhotos.length)) {
      this.photo = this.listePhotos[this.photo.id];
    } else {
      this.photo = this.listePhotos[0];
    }
  }
}

export interface Photo {
  id: number;
  photo: string;
}
