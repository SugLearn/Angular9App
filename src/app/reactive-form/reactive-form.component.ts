import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchValidators } from './custom-validator/MatchValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
    }, {
      validator: MatchValidators('password', 'confirmPassword')
  }
    )
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;

    // // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //     return;
    // }

    // display form values on success
    alert('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
