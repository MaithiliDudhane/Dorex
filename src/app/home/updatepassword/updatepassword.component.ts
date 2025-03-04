import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss'],
})
export class UpdatepasswordComponent   {

  
  updatepasswordOfUserObj =
  {
    
    iId:-1,
    sMobileNo:"",
    sPassword:"",
    sConfirmPassword:"", 	 	
    
  }
  updatepasswordValidation=new FormGroup({
    sMobileNo:new FormControl('',[Validators.required]),
    sPassword:new FormControl('',[Validators.required]),
    sConfirmPassword:new FormControl('',[Validators.required]),
    

  })
  constructor(public router:Router,public service:WebService) { }

  
  updatepassword()
    {
      console.log(this.updatepasswordOfUserObj)
      this.service.postData({data:this.updatepasswordOfUserObj},"?action=forgot").then(res=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==2)
            {
                alert("Password updated")
            }
            else{
              this.router.navigateByUrl('dashboard')

            }
        });
       
    }

}
