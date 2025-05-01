import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../../../service/api-service/employeeApiService/employee-service.service';
import { Subscription } from 'rxjs';
import { Employee } from '../../../../../models/EmployeeDtos/employee';
import { CommonModule,Location } from '@angular/common';
import { EmployeeModelInsertComponent } from '../employee-model-insert/employee-model-insert.component';

@Component({
  selector: 'app-employee-detiles',
  imports: [CommonModule,EmployeeModelInsertComponent],
  templateUrl: './employee-detiles.component.html',
  styleUrl: './employee-detiles.component.scss'
})
export class EmployeeDetilesComponent implements OnInit,OnDestroy {
  id:string|null=null;
  lodding:boolean=true;
  lsobservableDistory:Subscription[]=[];
  public employee:Employee|null=null;
  constructor(private route: ActivatedRoute,private employeeService: EmployeeService,private router: Router) {}
  ngOnDestroy(): void {
    this.lsobservableDistory.forEach(x=>x.unsubscribe())
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id==null||Number.isSafeInteger(this.id))
      return;

    this.lodding=true;
    this.lsobservableDistory.push(
      this.employeeService.Get(Number.parseInt(this.id))
    .subscribe({
      next:d=>{this.employee=d;}
    })
    )

    this.lodding=false;
  }
  loadEmployeeData()
  {

    window.location.reload()
  
  }
}
