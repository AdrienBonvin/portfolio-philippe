import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCommonModule } from '../common/custom-common.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CustomCommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
