import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../../service/api-service/employeeApiService/employee-service.service';
import { Subscription } from 'rxjs';
import { Employee } from '../../../../../models/EmployeeDtos/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detiles',
  imports: [CommonModule],
  templateUrl: './employee-detiles.component.html',
  styleUrl: './employee-detiles.component.scss'
})
export class EmployeeDetilesComponent implements OnInit,OnDestroy {
  id:string|null=null;
  lodding:boolean=false;
  lsobservableDistory:Subscription[]=[];
  public employee:Employee|null=null;
  constructor(private route: ActivatedRoute,private employeeService: EmployeeService) {}
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
      next:d=>this.employee=d
    })
    )
    this.lodding=false;
  }
}
