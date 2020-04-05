import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { CardComponent } from './card/card.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MemberComponent } from './member/member.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  {
    path: 'recrutement',
    component: RecrutementComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'card',
    component: CardComponent
  },

  {
    path: 'members',
    component: MemberComponent
  },
  {
    path: 'member/create',
    component: MemberAddComponent
  },
  {
    path: 'contact/create',
    component: ContactAddComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
