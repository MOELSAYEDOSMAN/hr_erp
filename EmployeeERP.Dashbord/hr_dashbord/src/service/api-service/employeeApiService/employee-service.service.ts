import { Employee } from './../../../models/EmployeeDtos/employee';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ListDataDto } from '../../../models/listDtos/list-data-dto';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseController="Employee";
  private httpOptions = {
    headers: new HttpHeaders({
   'Content-Type':  'application/json',
  })
  };
  constructor(private httpclient:HttpClient) {

  }

  GetAll(page:number,count:number):Observable<ListDataDto<Employee>>
  {
    return this.httpclient.post<ListDataDto<Employee>>(`${environment.apiUrl}/${this.baseController}/GetAll`,{
      page:page,count:count
    },this.httpOptions)
  }

  filter(emp:Employee,page:number,count:number):Observable<ListDataDto<Employee>>
  {
    return this.httpclient.post<ListDataDto<Employee>>(`${environment.apiUrl}/${this.baseController}/GetAllWithFilter`,{
      page:page,count:count,employee:emp
    },this.httpOptions)
  }

  Get(id:number):Observable<Employee|null>
  {
    return this.httpclient.get<Employee|null>(`${environment.apiUrl}/${this.baseController}/Get/${id}`);
  }
  insert(emp:Employee):Observable<Employee>
  {
    emp.owner=localStorage.getItem("owner")??"";
    return this.httpclient.post<Employee>(`${environment.apiUrl}/${this.baseController}/Insert`,{
      employee:emp
    },this.httpOptions)
  }

  update(emp:Employee):Observable<Employee>
  {
    emp.owner=localStorage.getItem("owner")??"";
    return this.httpclient.post<Employee>(`${environment.apiUrl}/${this.baseController}/Update`,{
      employee:emp
    },this.httpOptions)
  }

  remove(emp:Employee):Observable<boolean>
  {
    emp.owner=localStorage.getItem("owner")??"";
    return this.httpclient.post<boolean>(`${environment.apiUrl}/${this.baseController}/Remove`,{
      employee:emp
    },this.httpOptions)
  }






}
