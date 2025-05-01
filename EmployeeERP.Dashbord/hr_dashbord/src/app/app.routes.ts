import { Routes } from '@angular/router';
import { MainLayoutComponent } from './Component/layout/main-layout/main-layout.component';
import { hrLodinGuard } from './Gards/admin/hr-lodin.guard';
import { EmployeeIndexComponent } from './Component/hr/employee/employee-index/employee-index.component';
import { EmptyLayoutComponent } from './Component/layout/empty-layout/empty-layout.component';
import { AdminComponent } from './Component/hr/admin/admin/admin.component';
import { EmployeeDetilesComponent } from './Component/hr/employee/employee-detiles/employee-detiles.component';
import { PostionListComponent } from './Component/hr/postion/postion-list/postion-list.component';

export const routes: Routes = [
  {path:"" ,canActivate:[hrLodinGuard],component:MainLayoutComponent,children:[
    {path:"",redirectTo:"Employee",pathMatch:'full'},
    {path:"Employee",title:"Employee",component:EmployeeIndexComponent},
    {path:"EmployeeDetails/:id",title:"Employee Details",component:EmployeeDetilesComponent},
    {path:"postion",title:"postion",component:PostionListComponent},
  ]},
  {
    path:"" ,component:EmptyLayoutComponent,children:[
      {path:"",redirectTo:"Auth",pathMatch:'full'},
    {path:"Auth",title:"Auth",component:AdminComponent},
    ]
  }
];
