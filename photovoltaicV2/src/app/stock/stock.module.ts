import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarPanelComponent } from './solar-panel/solar-panel.component';
import {FormsModule} from "@angular/forms";
import {NgCircleProgressModule} from "ng-circle-progress";



@NgModule({
  declarations: [
    SolarPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgCircleProgressModule
  ]
})
export class StockModule { }
