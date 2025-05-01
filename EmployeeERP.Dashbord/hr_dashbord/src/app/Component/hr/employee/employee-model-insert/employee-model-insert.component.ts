import { ListDataDto } from './../../../../../models/listDtos/list-data-dto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../../../models/EmployeeDtos/employee';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../../../../service/api-service/employeeApiService/employee-service.service';
import { PostionApiService } from '../../../../../service/api-service/postionApiService/postion-api.service';
import { PostiionDto } from '../../../../../models/postion/postiion-dto';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-model-insert',
  imports: [ReactiveFormsModule,CommonModule  ],
  templateUrl: './employee-model-insert.component.html',
  styleUrl: './employee-model-insert.component.scss'
})
export class EmployeeModelInsertComponent implements OnDestroy,OnInit {
  lsobservableDistory:Subscription[]=[];
  message:string|null=null;
  employee:Employee|null=null;
  formInput:FormGroup;
  postionlist!:ListDataDto<PostiionDto>;
constructor(private employeeService: EmployeeService,private positionService:PostionApiService,private fb:FormBuilder) {


  this.formInput=fb.group(
    {
      firstName:['',[Validators.required,Validators.minLength(1)]],
      lastName:['',[Validators.required,Validators.minLength(1)]],
      email:['',[Validators.required,Validators.minLength(1),Validators.email]],
      position:[null,[Validators.required,Validators.minLength(1)]],
    }
  );

  }

  ngOnInit(): void {
    this.lsobservableDistory.push(this.positionService.GetAll().subscribe({
      next:d=>this.postionlist=d
    }))

  }
  getErrorKeys(control: AbstractControl | null): string[] {
    return control?.errors ? Object.keys(control.errors) : [];
  }
  get firstName()
  {
    return this.formInput.get("firstName")
  }
  get lastName()
  {
    return this.formInput.get("lastName")
  }
  get email()
  {
    return this.formInput.get("email")
  }
  get position()
  {
    return this.formInput.get("position")
  }

  sumbit()
  {
    if(this.formInput.invalid)
    {
      this.message="Cheack Data"
    }
    else
    {
      this.message=null;
    }

    let input:Employee=this.formInput.value;

    this.lsobservableDistory.push(
      this.employeeService.insert(input)
      .subscribe(
        {
          next(value) {
            input=value
          },
          error:()=>this.message="cheack data"
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.lsobservableDistory.forEach(x=>x.unsubscribe())
  }
}



