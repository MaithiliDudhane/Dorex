import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-godavan',
  templateUrl: './godavan.component.html',
  styleUrls: ['./godavan.component.scss'],
})
export class GodavanComponent   {
  randomString:any;
  godavanObj=
  {
    iId:-1,
    sGodavanId:" ",
    sGodavanName:" ",
    sMobileNo:" ",
    sAddress:" ",
    sCity:" ",
    	
  }
  godavanValidation=new FormGroup({
   
    sGodavanId:new FormControl('',[Validators.required,]),

    sGodavanName :new FormControl('',[Validators.required,]),

    sMobileNo:new FormControl('',[Validators.required,]),

    sAddress:new FormControl('',[Validators.required,]),
    sCity:new FormControl('',[Validators.required,]),
  })
 

  constructor(public service:WebService,public router:Router) {

   }
  addGodavan()
  {
    console.log(this.godavanObj)
    this.service.postData({data:this.godavanObj},"?action=addGodavan").then((res: any)=>{
      var temp:any=res;
        console.log(res);
        if(temp.result==1)
          {
              alert("Godavan Details Added")
          }
         
          else{
            this.router.navigateByUrl('dashboard')

          }
      });
    }
    ngOnInit()
  {
    this.randomString = this.generateRandomString();
    this.godavanObj.sGodavanId=this.randomString
    // console.log(this.randomString)
  }
    generateRandomString() {
      const prefix = 'GD2024';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let randomChars = '';
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomChars += characters[randomIndex];
      }
      
      return prefix + randomChars;
    }

  

}
