import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from '../home.module';
import { HomePage } from '../home.page';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebService } from 'src/app/web.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent   {
  contactusOfUserObj=
  {
    iId:-1,
    sName:"",
    sEmail:"",
    sMobileNo:"",
    sMessage:"",
  }
  contactusValidation=new FormGroup({
    sName:new FormControl('',[Validators.required]),
    sEmail:new FormControl('',[Validators.required]),
    sMobileNo:new FormControl('',[Validators.required]),
    sMessage:new FormControl('',[Validators.required]),
   })
  
constructor(public router:Router,public service:WebService) { }
  
  
contactus()
{
  console.log(this.contactusOfUserObj)
  this.service.postData({data:this.contactusOfUserObj},"?action=contactus").then(res=>{
    var temp:any=res;
      console.log(res);
      if(temp.result==1)
        {
            alert("Record added")
        }
       
        else{
          this.router.navigateByUrl('dashboard')

        }
    });
   
}
 
}
