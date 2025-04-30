import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/layout/header/header.component";
import { SlidparComponent } from "./Component/layout/slidpar/slidpar.component";
import { EmployeeIndexComponent } from "./Component/hr/employee/employee-index/employee-index.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SlidparComponent, EmployeeIndexComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})

export class AppComponent {
  title = 'Hr ERP';
}
