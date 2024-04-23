import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactorRequestListComponent } from './contactor-request-list/contactor-request-list.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { AddContactorComponent } from './add-contactor/add-contactor.component';
import {FormsModule} from "@angular/forms";
import { ContactorsListComponent } from './contactors-list/contactors-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";



@NgModule({
    declarations: [
        ContactorRequestListComponent,
        AddContactorComponent,
        ContactorsListComponent
    ],
  exports: [
    ContactorRequestListComponent,
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSlideToggleModule
    ]
})
export class AdminModule { }
