import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ContactorControllerService} from "../../services/services/contactor-controller.service";
import {Contactor} from "../../services/models/contactor";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {CustomService} from "../../services/services/custom.service";

@Component({
  selector: 'app-contactors-list',
  templateUrl: './contactors-list.component.html',
  styleUrls: ['./contactors-list.component.css']
})
export class ContactorsListComponent implements AfterViewInit {
  constructor(private contactorService: ContactorControllerService,
              private route : Router,
              private customService : CustomService) {
  }
  badRequest : boolean = false
  goodRequest : boolean = false
  errorMessage : string = ""
  dataExist : boolean = false
  contactorsList: Array<Contactor> = []
  contactor: Contactor = {
    id: 0, person: {firstName: "", lastName: "", age: 0, address: ""}, email: ""
  }
  user : any = {
    email : "", password : "", authorities : [], enabled : false, nom :"", prenom : "", account_locked : false
  }
  displayedColumns: string[] = ['nom', 'prenom','age', 'email', 'addresse', 'action'];
  dataSource = new MatTableDataSource<Contactor>(this.contactorsList);
  posts: any
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  public getContactors(): void {
    this.contactorService.getAllContactors().subscribe({
      next: (res) => {
        if(res.length != 0){
          this.dataExist = true
        }
        this.posts = res
        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }

  public getContactorAccount(contactor : Contactor):void{
    this.customService.getContactorAccount(contactor.email).subscribe({
      next:(res)=>{
        this.user = res
      }
    })
  }

  public selectContactor(contactor : Contactor):void{
    this.contactor = contactor
    this.getContactorAccount(contactor)
  }

  public activateAccountByAdmin(): void{
    this.customService.activateAccountByAdmin(this.contactor).subscribe({
      error:(err)=>{
        if (err.status === 200){
          this.errorMessage += err.error.text
          this.goodRequest = true
          setTimeout(() => {
            this.goodRequest = false
          }, 2100);
        }else {
          this.badRequest = true
          this.errorMessage += err.error.text
        }
      }
    })
  }

  public disableAccountByAdmin(): void{
    this.customService.disableAccountByAdmin(this.contactor).subscribe({
      error:(err)=>{
        if (err.status === 200){
          this.errorMessage = err.error.text
          this.goodRequest = true
          setTimeout(() => {
            this.goodRequest = false
          }, 2100);
        }else {
          this.badRequest = true
          this.errorMessage += err.error.text
        }
      }
    })
  }

  public updateContactor():void{
    this.contactorService.updateContactor({body: this.contactor}).subscribe({
      error:(err)=>{
        if (err.status === 200){
          this.errorMessage += err.error.text
        }else {
          this.badRequest = true
          this.errorMessage += err.error.text
        }
      }
    })
    if(this.user.enabled){
      this.activateAccountByAdmin()
    }else{
      this.disableAccountByAdmin()
    }
  }

  public navigateToCreateNewContactor() {
    this.route.navigate(['photovoltaic/contactor/new'])
  }

  public deleteContactor():void{
    this.contactorService.deleteContactor({
      id : this.contactor.id
    }).subscribe({
      error:(err)=>{
        console.log(err)
      }
    })
  }

  applyFilter() {
    const filterValue = (event?.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  ngAfterViewInit() {
    this.getContactors()
    this.paginator._intl.itemsPerPageLabel="nombre de ligne";
  }


}
