import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Cesar', 'Gomez', true, 'payOne', 'English');
}
