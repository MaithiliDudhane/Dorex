import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent   {

  registrationOfUserObj=
  {
    iId:-1,
    sName:"",
    sEmailId:"",
    sMobileNo:"",
    sAddress:"",
    sGender:"",
    sRole:"",
    dtDateOfJoining:"",
    sPassword:"",
    sConfirmPassword:"",                                              
    
  }
  registrationValidation=new FormGroup({
    sName:new FormControl('',Validators.required),
    sEmailId:new FormControl('',[Validators.required,]),
    // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)]")
    sMobileNo:new FormControl('',[Validators.required,]),
    // Validators.pattern("/^+91(7\d|8\d|9\d)\d{9}$/")
    sAddress:new FormControl('',[Validators.required]),
    sGender:new FormControl('',[Validators.required]),
    sRole:new FormControl('',[Validators.required]),
    dtDateOfJoining:new FormControl('',[Validators.required]),
    sPassword:new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$")]),
    sConfirmPassword:new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$")])

  })

constructor(public router:Router,public service:WebService) { }

home()
{
this.router.navigateByUrl('home')
}
about()
{
this.router.navigateByUrl('aboutus')
}
services()
{
this.router.navigateByUrl('splitservices')
}
contactus()
{
this.router.navigateByUrl('contact')
}

login()
{
this.router.navigateByUrl('login')
}
register()
{
console.log(this.registrationOfUserObj)
this.service.postData({data:this.registrationOfUserObj},"?action=adduser").then(res=>{
  var temp:any=res;
    console.log(res);
    alert(" Registration Successful !!! ");
  });
 
}




  

}
