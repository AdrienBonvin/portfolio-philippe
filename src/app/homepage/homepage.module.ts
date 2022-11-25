import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { HomepageComponent } from './homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SocialproofComponent } from './socialproof/socialproof.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCommonModule } from '../common/custom-common.module';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SocialproofComponent,
    ContactComponent,
    ServicesComponent,
    AboutusComponent,
  ],
  imports: [
    CommonModule,
    NavbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    CustomCommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
