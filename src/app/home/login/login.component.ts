import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent   {
  loginOfUserObj=
  {
    sMobileNo:"",
    sPassword:"",
  }
  loginValidation=new FormGroup({
   
    sMobileNo:new FormControl('',[Validators.required,]),
    // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)]")
    
    // Validators.pattern("/^+91(7\d|8\d|9\d)\d{9}$/")
   
    sPassword:new FormControl('',[Validators.required,]),
    
    // sPassword:new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$")]),
    //"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"

  })

  constructor( public router:Router,public service:WebService) { }

  forgotPassword()
  {
    this.router.navigateByUrl('home/updatepassword')
  }
  // login()
  // {
  //   console.log(this.loginOfUserObj)
  //   //this.router.navigateByUrl('home')
  // }
  

  register()
  {
    this.router.navigateByUrl('home/registration')
  }
  login()
    {
      console.log(this.loginOfUserObj)
      this.service.postData({data:this.loginOfUserObj},"?action=login").then(res=>{
        var temp:any=res;
          // console.log(temp.records[0]);
          console.log(temp.result);
          if(temp.result==1)
            {
                alert("Enter Correct Details")
            }
            else if(temp.result==3)
            {
              alert("Register To Login")
            }
            else{
              localStorage.setItem("user",JSON.stringify(temp.records[0]))
              this.router.navigateByUrl('dashboard')

            }
        });
       
    }

}
