import { Component } from '@angular/core';
import { Employee } from '../../../../../models/EmployeeDtos/employee';

@Component({
  selector: 'app-employee-model-insert',
  imports: [],
  templateUrl: './employee-model-insert.component.html',
  styleUrl: './employee-model-insert.component.scss'
})
export class EmployeeModelInsertComponent {
employee:!Employee;
}
