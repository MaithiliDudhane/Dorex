import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-trackingfirst',
  templateUrl: './trackingfirst.component.html',
  styleUrls: ['./trackingfirst.component.scss'],
})
export class TrackingfirstComponent   {
trackingFirstOfUserObj=
{
  sAWBno:"",
}
trackingFirstValidation=new FormGroup({
  sAWBno:new FormControl('',[Validators.required,])
})
  constructor(public router:Router,public service:WebService) { 
   
  }
  track()
  {
    console.log(this.trackingFirstOfUserObj.sAWBno)
    this.service.postData({data:this.trackingFirstOfUserObj},"?action=getorderbyAwbsid").then(res=>{
      var temp:any=res;
        console.log(res);
        if(temp.records==0)
          alert("Please Enter Correct AWB Number")
        else
        {
              this.router.navigateByUrl('home/trackingsecond')
              this.service.trackingObj=temp.records[0]

        }
          
       
      });
  }
 

}
