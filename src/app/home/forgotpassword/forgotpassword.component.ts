import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent   {

  forgotpasswordOfUserObj=
  {
    sMobileNo:""
    
  }
  forgotpasswordValidation=new FormGroup({
   
    sMobileNo:new FormControl('',[Validators.required,])
    
  })

  constructor(public router:Router,public service:WebService) { }
 
    
  forgotPassword()
  {
    
        
              alert("Enter correct new password")
              this.router.navigateByUrl('home/updatepassword')
          
     
  }

  }

  


