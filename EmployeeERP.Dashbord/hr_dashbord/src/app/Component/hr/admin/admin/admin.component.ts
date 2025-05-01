import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
admin_email:string="";

constructor(private router: Router) {

}
  setvalue(event:Event)
  {
      if(event && event.target && event.target)
      {
        let input=(event.target as HTMLInputElement)?.value ?? "";
        if(input==null||input.length<2)
          return;
        this.admin_email=input;
      }
  }
  login()
  {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.admin_email)) {
      alert( this.admin_email+":Invalid email address")
      return;
    }
    localStorage.setItem("owner",this.admin_email);
    this.router.navigate(['']);
  }

}
