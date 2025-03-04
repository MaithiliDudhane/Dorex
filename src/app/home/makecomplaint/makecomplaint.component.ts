import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-makecomplaint',
  templateUrl: './makecomplaint.component.html',
  styleUrls: ['./makecomplaint.component.scss'],
})
export class MakecomplaintComponent   {
  makeComplaint :any=[]
  makecomplaintOfUserObj=
  {
    iId:-1,
    sAWBno:" ",
    sFullname:" ",
    sEmail:" ",
    sReason:" ",
    sMessage:" " 		
  }
  makecomplaintValidation=new FormGroup({
   
    sAWBno:new FormControl('',[Validators.required,]),

    sFullname :new FormControl('',[Validators.required,]),

    sEmail:new FormControl('',[Validators.required,]),

    sReason:new FormControl('',[Validators.required,]),

    sMessage:new FormControl('',[Validators.required,]),
  })
  constructor( public router:Router,public service:WebService) {
    this.getComplaints();
   }
  
  makecomplaint()
    {
      console.log(this.makecomplaintOfUserObj)
      this.service.postData({data:this.makecomplaintOfUserObj},"?action=addcomplaint").then(res=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==1)
            {
                alert("Complaint Added")
            }
           
            else{
              this.router.navigateByUrl('dashboard')

            }
        });
      }
  
getComplaints()
{
  
     this.service.presentLoadingWithOptions();
       this.service.getData({},"?action=selectorder").then(res=>{
       var temp:any=res;  
       this.service.stopLoad();
       this.makeComplaint=temp.records;
       console.log(this.makeComplaint)
       });
   

}
}