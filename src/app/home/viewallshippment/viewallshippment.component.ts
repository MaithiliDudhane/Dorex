import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';



@Component({
  selector: 'app-viewallshippment',
  templateUrl: './viewallshippment.component.html',
  styleUrls: ['./viewallshippment.component.scss'],
})
export class ViewallshippmentComponent{
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
    sStatus:" ",
    dtotalcost:0, 	
    }
    id:any
    status:any
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
   updateStatus(a:any)
   {
    this.viewallshippmentOfUserObj.sStatus=a
    console.log(this.viewallshippmentOfUserObj)
    this.service.postData({data:this.viewallshippmentOfUserObj},"?action=updateorder").then(res=>{
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
      this.status=a.sStatus
      console.log(this.status)
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
