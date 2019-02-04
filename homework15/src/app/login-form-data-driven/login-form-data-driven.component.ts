import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login-form-data-driven',
  template: `
    <p>
      login-form-data-driven works!
    </p>

    <form [formGroup] = "signUpForm" (ngSubmit) = "onSubmit()">
     
      <div [formGroupName] = "signup" >
        
        <div class = "name">
          <input type="text" class="input-fields-fifty" id="firstname" formControlName="firstname" placeholder="First name"/>
          <input type="text" class="input-fields-fifty" id="lastname" formControlName="lastname" placeholder="Last name"/>
        </div>

        <input type="text" class="input-fields" id="email" formControlName="email" placeholder="Email"/>
        <br>
        <input type="textPassword" class="input-fields" id="password" formControlName="password" placeholder="Password"/>
        <br>
        <input type="textPassword" class="input-fields" id="confirm_password" formControlName="confirm_password" placeholder="Confirm Password"/>
        <br>
        <button type="submit" class="btn btn-primary" [disabled]="!singUpForm.valid">Submit</button>

      </div>
    </form>
  `,
  styles: ['#firstname {} #lastname {} #password {} #confirm_password {} .btn btn-primary {} .name { width : 400px } .input-fields { width : 100%} .input-fields-fifty { width : 50%; display : inline-block;  } ']
})
export class LoginFormDataDrivenComponent implements OnInit {
  signUpForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = formBuilder.group([
      {
        'signup': formBuilder.group([
            {
              'firstname' :['', [Validators.required, this.firstNameValidator]],
              'lastname' :['', [Validators.required, this.lastNameValidator]],
              'email' :['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
              'password' :['', [Validators.required, this.passwordValidator]],
              'confirm_password' :['', [Validators.required, this.confirmPasswordValidator]]


            }
        ])
      }
    ]);
  }

  ngOnInit() {
  }


  firstNameValidator(){}

  lastNameValidator(){}

  passwordValidator(){}

  confirmPasswordValidator(){}

  onSubmit(){

  }

  
}
