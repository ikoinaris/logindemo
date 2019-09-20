import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  registerForm : FormGroup;
  isSubmitted = false;

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getFormControls() {
    return this.registerForm.value;
  }

  register(){
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.authService.login(this.registerForm.value);
    this.router.navigateByUrl('/admin');
  }

}
