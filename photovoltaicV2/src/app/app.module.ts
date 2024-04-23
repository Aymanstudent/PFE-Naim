import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AdminModule} from "./admin/admin.module";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {NgCircleProgressModule} from "ng-circle-progress";
import { WorkerComponent } from './worker/worker.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {DevisModule} from "./devis/devis.module";
import {StockModule} from "./stock/stock.module";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
    LandingPageComponent,
    WorkerComponent,
    AddWorkerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AdminModule,
        BrowserAnimationsModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
        }),
        StockModule,
        MatSlideToggleModule,
        DevisModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
