import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  qualification: string[];
  experience: string[];
  languages: string[];
  list: string[];
  constructor() { }

  employee: Employee = {
    firstName: null,
    lastName: null,
    email: null,
    number: null,
    address: null,
    username: null,
    password: null,
    gender: null,
    experience: null,
    qualification: null,
    languages: []
  };

  ngOnInit(): void {
    this.qualification = ['CE', 'IT', 'EC' ];
    this.experience = ['Fresher', 'Above 1 years','Above 3 years','Above 5 years'];
    this.languages=['C','Java','CSharp','PHP','Python'];
  }
  onSubmit(form: NgForm){
    if(form.value.C==true){
      this.employee.languages.push("C");
  }
  if(form.value.Java==true){
      this.employee.languages.push("Java");
  }
  if(form.value.CSharp == true){
      this.employee.languages.push("C#");
  }
  if(form.value.PHP==true){
    this.employee.languages.push("PHP");
  }
  if(form.value.Python==true){
    this.employee.languages.push("Python");
  }
    if(form.valid){
      console.log(this.employee);
    }
  }
}
