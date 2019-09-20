import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  programmingLanguage = new FormControl();
  programmingLanguageList : string[] = ['Java', 'Python', 'C++', 'VisualBasic']
  databaseSystem = new FormControl();
  databaseSystemList : string[] = ['PostgreSQL', 'DbVisualizer', 'SQLServer']
  framework = new FormControl();
  frameworkList : string[] = ['AngularJS', 'SpringMVC', 'ASP.NET']
  cms = new FormControl();
  cmsList : string[] = ['Joomla', 'Wordpress', 'Drupal']

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
