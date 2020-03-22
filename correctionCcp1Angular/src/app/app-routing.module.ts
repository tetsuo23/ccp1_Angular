import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { CardComponent } from './card/card.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
