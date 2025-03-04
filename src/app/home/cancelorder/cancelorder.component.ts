import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-cancelorder',
  templateUrl: './cancelorder.component.html',
  styleUrls: ['./cancelorder.component.scss'],
})
export class CancelorderComponent   {

  cancelorderOfUserObj=
  {
    
    iId:-1,
    sAWBNumber:" " ,
    sFullName:" ",	
    sLastName:" ", 	
    sEmail:"",
    sMobileNo:"",
    dDate:" ", 	
    dTotalCost:" ",
    sSourceAddress:" ",
    sDestinationAddress:" ", 	
    sReason:" ", 	
    bisActive:"" 	
    
  } 
  cancelOrderValidation=new FormGroup({
    sAWBNumber:new FormControl('',[Validators.required]),
    sFullName:new FormControl('',[Validators.required]),
    sLastName:new FormControl('',[Validators.required]),
    sEmail:new FormControl('',[Validators.required]),
    sMobileNo:new FormControl('',[Validators.required]),
    dDate:new FormControl('',[Validators.required,]),
    dTotalCost:new FormControl('',[Validators.required,]),
    sSourceAddress:new FormControl('',[Validators.required,]),
    sDestinationAddress:new FormControl('',[Validators.required,]),
    sReason:new FormControl('',[Validators.required,]),
    
    // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)]")
    
    // Validators.pattern("/^+91(7\d|8\d|9\d)\d{9}$/")
   
    
       //"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"

  })
  
  // service: any;
  
  constructor(public router :Router,public service:WebService) { }

  
  add()
    {
      console.log(this.cancelorderOfUserObj)
      this.service.postData({data:this.cancelorderOfUserObj},"?action=cancelorder").then((res: any)=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==1)
            {
                alert("Cancel Order")
            }
           
            else
            {
              this.router.navigateByUrl('dashboard')

            }
        });
       
    }

}
