import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SlidparComponent } from "../slidpar/slidpar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, SlidparComponent,RouterModule ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
