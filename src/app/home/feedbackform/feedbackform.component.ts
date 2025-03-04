import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.scss'],
})
export class FeedbackformComponent   {
  makeFeedback:any=[]
  feedbackOfUserObj =
  {
    
    iId:-1,
    sAWBno:" ",
    sFullname:" ",
    sEmail:" ",
    sMobileNo:" ",
    sSatiesfy:" ",
    sSuggestions:" ", 	
    
  }
   feedbackValidation=new FormGroup({
    sAWBno:new FormControl('',[Validators.required]),
    sFullname:new FormControl('',[Validators.required]),
    sEmail:new FormControl('',[Validators.required]),
    sMobileNo:new FormControl('',[Validators.required]),
    sSatiesfy:new FormControl('',[Validators.required]),
    sSuggestions:new FormControl('',[Validators.required,]),
   })
  
  constructor(public router:Router,public service:WebService) {
    this.getFeedback()
   }
  addfeedback()
    {
      console.log(this.feedbackOfUserObj)
      this.service.postData({data:this.feedbackOfUserObj},"?action=addfeedback").then(res=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==1)
            {
                alert("Feedback Added")
             }
            else{
               this.router.navigateByUrl('dashboard')

             }
        });
       
    }
    getFeedback()
    {
  
     this.service.presentLoadingWithOptions();
       this.service.getData({},"?action=selectorder").then(res=>{
       var temp:any=res;  
       this.service.stopLoad();
       this.makeFeedback=temp.records;
       console.log(this.makeFeedback)
       });
   

    }
  

}
