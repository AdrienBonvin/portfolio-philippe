import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import './../../../assets/js/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('featurePopup', {static: false}) popup!: ElementRef;


  contactForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    cp: new FormControl(''),
    ville: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    services: new FormControl(''),
    commentaire: new FormControl('')
  });

  serviceArray: Service[] = [
    { name:'Pompe à chaleur', color:'red', checked:false },
    { name:'Chaudière Gaz ou Fioul', color:'red', checked:false },
    { name:'Bruleur Gaz ou Fioul', color:'red', checked:false },
    { name:'Désembouage chauffages', color:'red', checked:false },
    { name:"Contrat entretien", color:'red', checked:false },
    { name:'Installation plomberie', color:'blue', checked:false },
    { name:'Dépannage plomberie', color:'blue', checked:false },
    { name:'Installation chauffe eau', color:'blue', checked:false },
    { name:'Dépannage chauffe eau', color:'blue', checked:false },
    { name:'Création/Vente salle de bain', color:'blue', checked:false },
    { name:'Autre', color:'', checked:false }
  ]

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.builder.group({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    cp: new FormControl('', [Validators.required]),
    ville: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    telephone: new FormControl('', [Validators.required]),
    services: new FormArray([

    ]),
    commentaire: new FormControl('', [Validators.required])
    })
}

openMail() {
    this.open();
    let nom = this.contactForm.get('nom')?.value;
    let prenom = this.contactForm.get('prenom')?.value;
    let cp = this.contactForm.get('cp')?.value;
    let ville = this.contactForm.get('ville')?.value;
    let email = this.contactForm.get('email')?.value;
    let telephone = this.contactForm.get('telephone')?.value;
    let commentaire = this.contactForm.get('commentaire')?.value;
    let services = "";
    this.serviceArray.forEach(service => {
      if (services != "" && service.checked) {
        services = services + ', ' + service.name;
      } else if (service.checked) {
        services = service.name;
      }
    });

    // Mail Entreprise
   Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'contact.dubuisson.philippe@gmail.com',
    Password : 'FB7E4A2AA736968E18BF27C62A7E1EBEF893',
    To : 'dubuisson.ph@orange.fr',
    From : 'contact.dubuisson.philippe@gmail.com',
    Subject : "Demande d'intervention - "+ nom + ' ' + prenom + ' ' + ville + ' ' + cp ,
    Body : `
      <b>Nom : </b> ${nom} ${prenom} <br />
      <b>Ville : </b> ${ville} ${cp} <br />
      <b>Email : </b> ${email} <br />
      <b>Tel : </b> ${telephone} <br />
      <b>Services requis : </b> ${services} <br /> <br />
      ${commentaire}
      <br/><br/><br/>.`
    }).then( (message: string) => {
        console.log("Mail demande envoyé avec succès : " + message)
     } );

     //Mail Client
     Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'contact.dubuisson.philippe@gmail.com',
      Password : 'FB7E4A2AA736968E18BF27C62A7E1EBEF893',
      To : email,
      From : 'contact.dubuisson.philippe@gmail.com',
      Subject : "Accusé de réception pour votre demande d'intervention - Entreprise Dubuisson" ,
      Body : `
        Bonjour ${nom} ${prenom}, <br/><br/>
        Nous avons bien reçu votre demande, et allons tenter d'y répondre dans les plus brefs délais.<br /><br/><br/>
        Cordialement,<br/>
        Entreprise Dubuisson
        <br/><br>PS : Cet email est automatique, il est donc inutile d'y répondre. Pour toutes questions, contactez-nous depuis notre site, ou directement sur notre adresse mail : dubuisson.ph@orange.fr<br><br>
        Une demande spécifique ? <a href='https://entreprise-dubuisson.web.app/'>Visitez notre site web</a>
        <br/>Vous souhaitez savoir à quoi ressemble notre travail ? <a href='https://www.instagram.com/philippe.dubuisson_/'>Visitez notre Instagram</a>

        <br/><br/><br/>
        Demande envoyée : <br/>
        <b>Services requis : </b> ${services} <br /> <br />
        ${commentaire}
        <br/><br/><br/>.`,
      }).then( (message: string) => {
          console.log("Mail client envoyé avec succès : " + message)
       } );
  }

  open() {
    this.popup.nativeElement.style.display = 'flex';
  }

  close() {
    this.popup.nativeElement.style.display = 'none';
  }

}

export class Service {
  name: string = "";
  color: string = "";
  checked: boolean = false;
}
