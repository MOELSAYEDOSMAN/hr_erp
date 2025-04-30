import { Employee } from './../../../../../models/EmployeeDtos/employee';
import { Component } from '@angular/core';
import {EmployeeService} from '../../../../../service/api-service/employeeApiService/employee-service.service'
import { ListDataDto } from '../../../../../models/listDtos/list-data-dto';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-employee-index',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee-index.component.html',
  styleUrl: './employee-index.component.scss'
})
export class EmployeeIndexComponent {
  data!: ListDataDto<Employee>;
  page:number=1;
  count:number=5;
  emp:Employee;
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
  }
  loadEmployeeData()
  {
    this.employeeService.filter(this.emp,this.page,this.count).subscribe({
      next: (d) => this.data = d,
      error: (err) => console.error('Error loading employees:', err)
    })
  }
}
