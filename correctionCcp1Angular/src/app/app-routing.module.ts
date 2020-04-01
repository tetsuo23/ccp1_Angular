import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { CardComponent } from './card/card.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MemberComponent } from './member/member.component';
import { MemberAddComponent } from './member-add/member-add.component'




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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
