import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.scss'],
})
export class ViewcomplaintComponent   {
  viewcomplaint:any=[]
  viewcomplaintOfUserObj =
  {
    iId:-1,
    sFullname:" ",
    sAWBNo:" ",
    sEmail:" ",
    sReason:" ",
    sMessage:" " 		
  }
  constructor(public router:Router,public service:WebService) {
    this.getcomplaint()
   }

   getcomplaint(){
     this.service.presentLoadingWithOptions();
       this.service.getData({},"?action=getAllComplaint").then(res=>{
       var temp:any=res;  
       this.service.stopLoad();
       this.viewcomplaint=temp.records;
       console.log(this.viewcomplaint)
       });
   }
   select(a:any)
   {
       console.log(a)
       this.viewcomplaintOfUserObj=a
 
   }

}
