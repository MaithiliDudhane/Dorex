import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-answercomplaint',
  templateUrl: './answercomplaint.component.html',
  styleUrls: ['./answercomplaint.component.scss'],
})
export class AnswercomplaintComponent   {
  user:any=[]
  viewComplaint:any=[]
  
  answercomplaintOfUserObj=
  {
    
    iId:-1,
    sAWBNo:"",
    sFullname:"",
    sEmail:"",
    sReason:"",
    sMessage:"",
    sReplay:"", 		
    sAnsweredBy:""
  }
  id:any
  answercomplaintValidation=new FormGroup({
    sAWBNo:new FormControl({value:'',disabled:true},[Validators.required]),
    sFullname:new FormControl({value:'',disabled:true},[Validators.required]),
    sEmail:new FormControl({value:'',disabled:true},[Validators.required]),
    sReason:new FormControl({value:'',disabled:true},[Validators.required]),
    sMessage:new FormControl({value:'',disabled:true},[Validators.required]),
    sReplay:new FormControl('',[Validators.required,])
   
   

  })


 
  constructor(public router:Router,public service:WebService) {
    
    this.getComaplint()
    var user:any= (localStorage.getItem("user"))
     this.user=JSON.parse(user)
     console.log(user)
   }

  answercomplaint()
    {
      this.answercomplaintOfUserObj.sAnsweredBy=this.user.sRole
      console.log(this.answercomplaintOfUserObj)
      this.service.postData({data:this.answercomplaintOfUserObj},"?action=addAnsCompalint").then(res=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==1)
            {
                alert("Answering Complaint")
            }
           
            else{
              this.router.navigateByUrl('dashboard')

            }
        });
       
    }
    getComaplint()
   {
     this.service.presentLoadingWithOptions();
       this.service.getData({},"?action=getAllComplaint").then(res=>{
       var temp:any=res;  
       this.service.stopLoad();
       this.viewComplaint=temp.records;
       console.log(this.viewComplaint)
       });
   }
   select(a:any)
   {
       console.log(a)
       this.answercomplaintOfUserObj=a
        this.id=this.answercomplaintOfUserObj.iId
   }
  

}
