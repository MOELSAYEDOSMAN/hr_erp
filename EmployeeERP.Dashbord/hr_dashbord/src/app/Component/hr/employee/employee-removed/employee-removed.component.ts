import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { EmployeeService } from '../../../../../service/api-service/employeeApiService/employee-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-removed',
  imports: [],
  templateUrl: './employee-removed.component.html',
  styleUrl: './employee-removed.component.scss'
})
export class EmployeeRemovedComponent implements OnDestroy{
 lsobservableDistory:Subscription[]=[];
 @Output() callApiEvent = new EventEmitter()
 @Input() employeeId: number = 0;
constructor(private employeeService: EmployeeService) {
}
ngOnDestroy(): void {
  this.lsobservableDistory.forEach(x=>x.unsubscribe())
}

delete()
{
  this.lsobservableDistory.push(
    this.employeeService.remove(this.employeeId).subscribe()
  )
  setTimeout(() => {}, 1000);
  alert("deleted")
  this.callApiEvent.emit()
}
}


