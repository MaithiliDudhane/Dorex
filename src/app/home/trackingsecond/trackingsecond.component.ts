import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-trackingsecond',
  templateUrl: './trackingsecond.component.html',
  styleUrls: ['./trackingsecond.component.scss'],
})
export class TrackingsecondComponent   {

  trackingObj=
  {
    sAWBno:"",
    dtDate:"",
    sStatus:"",
  }
  obj={
    sAWBno:""
  }
  viewshippment: any;
  constructor(public service:WebService,public router:Router) { 
    this.getorder()
    this.trackingObj=this.service.trackingObj
    console.log(this.trackingObj)
  }
  ngOnInt()
  {
    this.trackingObj=this.service.trackingObj
    console.log(this.trackingObj)
  }
  feedback()
  {
    this.router.navigateByUrl('home/feedbackform')
  }
  complaint()
  {
    this.router.navigateByUrl('home/makecomplaint')
  }
  back()
  {
    this.router.navigateByUrl('home/trackingfirst') 
  }
  getorder()
  {
    this.service.presentLoadingWithOptions();
      this.service.getData({},"?action=selectorder").then(res=>{
      var temp:any=res;  
      this.service.stopLoad();
      this.viewshippment=temp.records;
      console.log(this.viewshippment)
      });
  }
  getOrderbyId()
  {
    this.service.postData({data:this.obj},"?action=getorderbyAwbsid").then(res=>{
      var temp:any=res;
        console.log(res);
       
      });
  }
}
