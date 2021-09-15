import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: String = 'Employees of the Year 2021';

  employees: Employee[] = [
    { id: '1', name: 'Sandeep', salary: 25000, status: 'Paid' },
    { id: '2', name: 'Mark', salary: 25500, status: 'Received' },
    { id: '3', name: 'John', salary: 25700, status: 'Paid' },
    { id: '4', name: 'Sanjay', salary: 25900, status: 'Not Paid' },
  ];
}
