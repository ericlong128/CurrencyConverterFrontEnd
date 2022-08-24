import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
// import { RequestRegistration } from 'app/models/RequestRegistration'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  visible = false;
  buttonRegister= true;
  registrationForm: FormGroup;
  submitted = false;
  // username: string;
  // name: string;
  // age : number;
  // email: string;
  // phoneNumber: string;
  // password: string;
  // role: string;
  
  constructor(public registrationClient: LoginService, private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  register(){    
    this.submitted = true;
    if (this.registrationForm.invalid) {
      console.log("Please input all fields");
      return;
    }else {
      this.registrationClient.register(this.registrationForm.value).pipe(first()).subscribe((data) => {
          this.router.navigate(['']);
        }), (error: string) => {
        console.log("An Error Occured "+error);
      };            
    }    
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username : ['',Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  setSubmitted(submitted : boolean) {
    this.submitted = submitted;
  }
}
