import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../service/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Cesar', 'Gomez', true, 'payOne', 'default');
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster) {
  }

  validatePrimaryLanguage(value) {
    this.hasPrimaryLanguageError = value === "default";
  }

  submitForm(form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) { return; }

    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
      data => console.log('Success', data),
      err => console.log('Error: ', err)
      );
  }
}
