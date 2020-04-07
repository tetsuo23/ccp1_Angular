import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { CardComponent } from './card/card.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { MemberComponent } from './member/member.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from './member.service';
import { MemberAddComponent } from './member-add/member-add.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ConnexionComponent } from './connexion/connexion.component'

import { ContactService } from './contact.service';
import { PrestationsComponent } from './prestations/prestations.component';
import { GoogleComponent } from './google/google.component';
import { ConnexionService } from './connexion.service';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CardComponent,
    RecrutementComponent,
    ContactComponent,
    ProjetComponent,
    WorkInProgressComponent,
    MemberComponent,
    MemberAddComponent,
    ContactAddComponent,
    PrestationsComponent,
    GoogleComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MemberService, ContactService, ConnexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


