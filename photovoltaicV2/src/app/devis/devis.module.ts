import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisRequestComponent } from './devis-request/devis-request.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { DevisListComponent } from './devis-list/devis-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AddDevisRequestComponent } from './add-devis-request/add-devis-request.component';
import {FormsModule} from "@angular/forms";
import {NgxPrintDirective} from "ngx-print";
import { DevisRequestListComponent } from './devis-request-list/devis-request-list.component';


@NgModule({
  declarations: [
    DevisRequestComponent,
    AddDevisComponent,
    DevisListComponent,
    AddDevisRequestComponent,
    DevisRequestListComponent

  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    FormsModule,
    NgxPrintDirective
  ]
})
export class DevisModule { }
