import { Employee } from './../../../../../models/EmployeeDtos/employee';
import { Component, OnDestroy } from '@angular/core';
import {EmployeeService} from '../../../../../service/api-service/employeeApiService/employee-service.service'
import { ListDataDto } from '../../../../../models/listDtos/list-data-dto';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { EmployeeModelInsertComponent } from "../employee-model-insert/employee-model-insert.component";
import { EmployeeRemovedComponent } from "../employee-removed/employee-removed.component";
@Component({
  selector: 'app-employee-index',
  imports: [CommonModule, HttpClientModule, EmployeeModelInsertComponent, EmployeeRemovedComponent],
  templateUrl: './employee-index.component.html',
  styleUrl: './employee-index.component.scss'
})
export class EmployeeIndexComponent implements OnDestroy {
  lsobservableDistory:Subscription[]=[];
  data!: ListDataDto<Employee>;
  page:number=1;
  count:number=5;
  emp:Employee;
  empid:number=0;
  model_emp:boolean=false;
  emp_update:Employee|null=null;
  constructor(private employeeService: EmployeeService) {
  this.emp={id:0,firstName:"",lastName:"",creation:null,email:"",modified:null,modified_by:"",owner:"",position:"",soft_delete:false};
  }

  nextpage()
  {
    if(this.page==this.data.pages)
      return;
    this.page++;
    this.loadEmployeeData()
  }

  prevpage()
  {
    if(this.page==1)
      return;
    this.page--;
    this.loadEmployeeData()
  }

  filter(event:Event)
  {
    if(event && event.target && event.target)
    {
      let input=(event.target as HTMLInputElement)?.value ?? "";
      if(input==null||input.length<2)
        return;
      this.emp.email=input;
      this.loadEmployeeData();
    }

  }
  ngOnInit() {
    this.loadEmployeeData();
    this.model_emp=false;
  }
  ngOnDestroy(): void {
    this.lsobservableDistory.forEach(x=>x.unsubscribe())
  }
  loadEmployeeData()
  {
    this.lsobservableDistory.push( this.employeeService.filter(this.emp,this.page,this.count).subscribe({
      next: (d) => this.data = d,
      error: (err) => console.error('Error loading employees:', err)
    }))
    this.model_emp=false
  }

  setid(id:number)
  {
    this.empid=id
  }
  setEmp(input:Employee|null)
  {

    this.emp_update=input
    alert(this.emp_update?.firstName)
    this.model_emp=true
  }

  updateclosed()
  {
    this.model_emp=false;
    this.emp_update=null;
  }
}
