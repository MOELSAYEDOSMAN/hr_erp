import { BaseModel } from './../base-model';
export interface Employee extends  BaseModel{
  firstName:string,
  lastName:string,
  email:string,
  position:string
}
