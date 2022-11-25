import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  bruleur: string = "../../../assets/services/bruleur.png";
  chaudiere: string = "../../../assets/services/chaudiere.png";
  pompeChaleur: string = "../../../assets/services/pompe-chaleur.png";
  circuitChauffage: string = "../../../assets/services/circuit-chauffage.png";
  contrat: string = "../../../assets/services/contrat-entretien.png";

  depanPlomb: string = "../../../assets/services/depan-plomb.png";
  chauffeEau: string = "../../../assets/services/chauffe-eau.png";
  bathroom: string = "../../../assets/services/bathroom.png";
  toilet: string = "../../../assets/services/toilet.png";
  depannage: string = "../../../assets/services/depannage.png";

  isPortable: boolean = false;

constructor() { }

  ngOnInit(): void {
    this.isPortable = window.innerWidth < 700;
  }

}
