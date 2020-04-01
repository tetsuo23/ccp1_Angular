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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MemberService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


