import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent   {
  feedback:any=[]
  feedbackOfUserObj=
  {
    
    iId:-1,
    sAWBno:" ",
    sFullname:" ",
    sEmail:" ",
    sMobileNo:" ",
    sSatiesfy:" ",
    sSuggestions:" ", 	
    
  }
  
  constructor(public router:Router,public service:WebService) {

  this.getAllFeedBack()

   }
  
  getAllFeedBack()
  {
    this.service.presentLoadingWithOptions();
      this.service.getData({},"?action=getAllFeedBack").then(res=>{
      var temp:any=res;  
      this.service.stopLoad();
      this.feedback=temp.records;
      console.log(this.feedback)
      });
  }
  
  select(a:any)
  {
      console.log(a)
      this.feedbackOfUserObj=a

  }
}
