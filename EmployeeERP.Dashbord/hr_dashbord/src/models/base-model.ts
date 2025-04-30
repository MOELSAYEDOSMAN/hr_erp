export interface BaseModel {
  id:number,
  owner:string|null,
  modified_by:string|null,
  creation:Date|null,
  modified:Date|null,
  soft_delete:boolean|null
}
