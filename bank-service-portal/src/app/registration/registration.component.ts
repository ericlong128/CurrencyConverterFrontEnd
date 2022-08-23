import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { RequestRegistration } from 'app/models/RequestRegistration'
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  username: string;
  name: string;
  age : number;
  email: string;
  phoneNumber: string;
  password: string;
  
  private registrationData : RequestRegistration;
  constructor(public registrationClient: LoginService) { }

  register(){    
    this.submitted = true;
    if (this.registrationForm.invalid) {
      console.log("Please input all fields");
      return;
    }else {
      this.registrationData = new RequestRegistration();
      this.registrationData.setUsername(this.username);
      this.registrationData.setName(this.name);
      this.registrationData.setAge(this.age);
      this.registrationData.setPhoneNumber(this.phoneNumber);
      this.registrationData.setEmail(this.email);
      this.registrationData.setPassword(this.password);

      this.registrationClient.register(this.registrationData).subscribe((data) => {
          console.log("RESPONSE DATA "+JSON.stringify(data))
          if (data.responseCode=='200') {
            window.alert(data.responseMsg);
            this.visible = true;
          }
      }), (error: string) => {
        console.log("An Error Occured "+error);
      };            
    }    
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      username : new FormControl('',[Validators.required]),
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl()
    })
  }

  setSubmitted(submitted : boolean) {
    this.submitted = submitted;
  }
}
