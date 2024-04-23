import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactorRequestListComponent} from "./admin/contactor-request-list/contactor-request-list.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AddContactorComponent} from "./admin/add-contactor/add-contactor.component";
import {ContactComponent} from "./contact/contact.component";
import {ContactorsListComponent} from "./admin/contactors-list/contactors-list.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginComponent} from "./login/login.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {WorkerComponent} from "./worker/worker.component";
import {AddWorkerComponent} from "./add-worker/add-worker.component";
import {DevisRequestComponent} from "./devis/devis-request/devis-request.component";
import {AddDevisRequestComponent} from "./devis/add-devis-request/add-devis-request.component";
import {SolarPanelComponent} from "./stock/solar-panel/solar-panel.component";
import {DevisListComponent} from "./devis/devis-list/devis-list.component";
import {DevisRequestListComponent} from "./devis/devis-request-list/devis-request-list.component";
import {AddDevisComponent} from "./devis/add-devis/add-devis.component";

const routes: Routes = [
  {path:"photovoltaic", component: NavbarComponent, children : [
      {path:"contactorRequest", component : ContactorRequestListComponent},
      {path:"contactor/new", component : AddContactorComponent},
      {path:"contactor", component : ContactorsListComponent},
      {path:"home", component: LandingPageComponent},
      {path:"worker", component: WorkerComponent},
      {path:"worker/add", component: AddWorkerComponent},
      {path:"entrepreneur/welcome", component: LandingPageComponent},
      {path:"devisRequest", component : DevisRequestComponent},
      {path:"devisRequest/add", component: AddDevisRequestComponent},
      {path:"solarPanel", component : SolarPanelComponent},
      {path:"devis", component: DevisListComponent},
      {path:"gestionnaire/devisRequest", component: DevisRequestListComponent},
      {path:"devis/add", component: AddDevisComponent}
    ]},
  {path:"contact", component: ContactComponent},
  {path:"", component: HomePageComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
