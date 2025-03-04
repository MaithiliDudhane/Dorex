import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-cancel-shippment',
  templateUrl: './cancel-shippment.component.html',
  styleUrls: ['./cancel-shippment.component.scss'],
})
export class CancelShippmentComponent  implements OnInit {
  user:any=[]
  Flag=false
  viewshippment:any=[]
  viewallshippmentOfUserObj =
  {
    iId:-1,
    sAWBno:" " ,
    sSource:" ",	
    sDestination:" ", 	
    dWeight:0,
    dVolume:0,
    sShippmentType:" ", 	
    sPriority:" ",
    sSenderName:" ",
    sSenderMobileNo:" ", 	
    sReciverName:" ", 	
    sSenderEmail:" ",
    sReceiverEmail:" ",
    sReciverMobileNo:" ",
    sStatus:"",
    dtotalcost:0, 	
    }
    id:any
    searchData:any=""
  constructor(public router:Router,public service:WebService) {
    this.getorder()
    var user:any= (localStorage.getItem("user"))
     this.user=JSON.parse(user)
     console.log(user)
  
     if(this.user.sRole=='Opearator')
        {
          this.Flag=false
        } 
      else if(this.user.sRole=='Supervisor')
      {
        this.Flag=true
        

      }
      else if(this.user.sRole=='Admin')
      {
        this.Flag=true
        
      }
    
    

   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
   select(a:any)
   {
       console.log(a)
       this.viewallshippmentOfUserObj=a
        this.id=this.viewallshippmentOfUserObj.iId
   }
   cancel()
    {
      console.log(this.viewallshippmentOfUserObj)
      this.service.postData({iId:this.id},"?action=cancelorder").then(res=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==3)
            {
                alert("Order Canceled")
                this.getorder()
            }
           
            else{
              this.router.navigateByUrl('dashboardhome/viewAllShippment')

            }
        });
       
    }

  
}
