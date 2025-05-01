import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListDataDto } from '../../../models/listDtos/list-data-dto';
import { Observable } from 'rxjs';
import { PostiionDto } from '../../../models/postion/postiion-dto';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostionApiService {

  private baseController="Position";
  private httpOptions = {
    headers: new HttpHeaders({
   'Content-Type':  'application/json',
  })
  };
  constructor(private httpclient:HttpClient) {
  }

    GetAll():Observable<ListDataDto<PostiionDto>>
    {
      return this.httpclient.post<ListDataDto<PostiionDto>>(`${environment.apiUrl}${this.baseController}/GetAll`,{},this.httpOptions)
    }

    insert(title:string):Observable<PostiionDto>
    {
      return this.httpclient.post<PostiionDto>(`${environment.apiUrl}${this.baseController}/insert?position=${title}&owner=${localStorage.getItem("owner")??""}`,{
        position:title,owner:localStorage.getItem("owner")??""
      },this.httpOptions)
    }
}
