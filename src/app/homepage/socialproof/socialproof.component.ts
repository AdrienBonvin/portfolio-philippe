import { Component} from '@angular/core';
import { skip } from 'rxjs';

@Component({
  selector: 'app-socialproof',
  templateUrl: './socialproof.component.html',
  styleUrls: ['./socialproof.component.css']
})
export class SocialproofComponent {

  listeAvis : Avis[] = [
    {
      id: 1,
      photo: '../../../assets/photoProfil1.PNG',
      name: 'Adrien Bonvin',
      comment: "Mr Dubuisson connait tout les rouages de son métier sur le bout des doigts. Rénovant notre maison nous avons fait appel à lui pour toutes nos poses, et son travail est parfait. En plus d'être de très bon conseil quand on lui pose des questions, il met un point d'honneur à ce que tout soit posé au milimètre près et que le travail soit bien fait, tout ça en un temps record ! Vous pouvez le contacter les yeux fermés, je recommande.",
      source: 'Google'
    },
    {
      id: 2,
      photo: '../../../assets/photoProfil3.PNG',
      name: 'Eme Line Bmi',
      comment: 'Mr Dubuisson est une personne agréable et à l’écoute de ces clients et très professionnel ! Rdv rapide et efficace ! Je recommande et je referai appel à lui si besoin ! Merci encore pour votre efficacité !',
      source: 'Facebook'
    },
    {
      id: 3,
      photo: '../../../assets/photoProfil2.PNG',
      name: 'Morgan Levot',
      comment: "Suite à l'achat d'une vieille maison à retaper, j'ai fais refaire toute ma plomberie/wc/douches/chauffages dans la maison. Entreprise très réactive et bon boulot. je recommande sans hésiter!",
      source: 'Google'
    }
  ];

  avis: Avis = this.listeAvis[0];

  
  constructor() { }

  public changeComment(direction: string) {
    if (direction === 'previous' && this.avis.id > 1) {
      this.avis = this.listeAvis[this.avis.id -2];
    } else if (direction === 'previous') {
      this.avis = this.listeAvis[this.listeAvis.length-1];
    } else if (direction === 'next' && this.avis.id < (this.listeAvis.length)) {

      this.avis = this.listeAvis[this.avis.id];
    } else {
      this.avis = this.listeAvis[0];
    }
  }
}

export interface Avis {
  id: number;
  photo: string;
  name: string;
  comment: string;
  source: string;
}
