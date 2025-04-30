import { BaseModel } from './../base-model';
export interface Employee extends  BaseModel{
  firstName:string|null,
  lastName:string|null,
  email:string|null,
  position:string|null
}
