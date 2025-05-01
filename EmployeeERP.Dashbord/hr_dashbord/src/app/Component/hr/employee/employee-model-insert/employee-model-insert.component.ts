import { ListDataDto } from './../../../../../models/listDtos/list-data-dto';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Output() callApiEvent = new EventEmitter()
  @Input() employee_update: Employee|null = null;
constructor(private employeeService: EmployeeService,private positionService:PostionApiService,private fb:FormBuilder) {


  this.formInput=fb.group(
    {
      firstName:[null,[Validators.required,Validators.minLength(1)]],
      lastName:[null,[Validators.required,Validators.minLength(1)]],
      email:[null,[Validators.required,Validators.minLength(1),Validators.email]],
      position:[null,[Validators.required,Validators.minLength(1)]],
    }
  );

  }

  ngOnInit(): void {
    this.lsobservableDistory.push(this.positionService.GetAll().subscribe({
      next:d=>this.postionlist=d
    }))
    if(this.employee_update)
    {
      this.formInput=this.fb.group(
        {
          firstName:[this.employee_update?.firstName,[Validators.required,Validators.minLength(1)]],
          lastName:[this.employee_update?.lastName,[Validators.required,Validators.minLength(1)]],
          email:[this.employee_update?.email,[Validators.required,Validators.minLength(1),Validators.email]],
          position:[this.employee_update?.position,[Validators.required,Validators.minLength(1)]],
        }
      );
    }
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
      return;
    }
    else
    {
      this.message=null;
    }

    let input:Employee=this.formInput.value;

    if(this.employee_update)
    {
      this.lsobservableDistory.push(
        this.employeeService.update(input,this.employee_update.id)
        .subscribe(
          {
            next: value=> {
              input=value
              this.callApiEvent.emit()
            },
            error:()=>this.message="cheack data"
          }
        )
      )

    }
    else{
      this.lsobservableDistory.push(
        this.employeeService.insert(input)
        .subscribe(
          {
            next: value=> {
              input=value
              this.callApiEvent.emit()
            },
            error:()=>this.message="cheack data"
          }
        )
      )

    }
  }
  ngOnDestroy(): void {
    this.lsobservableDistory.forEach(x=>x.unsubscribe())
  }
}



