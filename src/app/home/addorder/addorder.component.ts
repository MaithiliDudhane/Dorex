import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.scss'],
})
export class AddorderComponent{
  imageElement:any
  img:any
  imgFlag=false
  randomString:any;
  addorderOfUserObj=
  {
    
    iId:-1,
    sAWBno:"" ,
    sSource:" ",	
    sDestination:" ", 	
    dWeight:0,
    dVolume:0,
    sShippmentType:" ", 	
    sPriority:" ",
    sSenderName:" ",
    sSenderMobileNo:" ", 	
    sReciverName:" ", 	
    sReciverMobileNo:" ",
    sImage:"",
    dtotalcost:0, 
    ddistance:0	,
    sSenderEmail:" ",
    sReceiverEmail:" ",
    
  }
  addorderValidation=new FormGroup({
    sAWBno:new FormControl('',[Validators.required]),
    sSource:new FormControl('',[Validators.required]),
    sDestination:new FormControl('',[Validators.required]),
    dWeight:new FormControl('',[Validators.required]),
    dVolume:new FormControl('',[Validators.required]),
    sShippmentType:new FormControl('',[Validators.required,]),
    sPriority:new FormControl('',[Validators.required,]),
    sSenderName:new FormControl('',[Validators.required,]),
    sSenderMobileNo:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    sReciverName:new FormControl('',[Validators.required,]),
    sReciverMobileNo:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    dtotalcost:new FormControl('',[Validators.required,]),
    ddistance:new FormControl('',[Validators.required,]),
    sSenderEmail:new FormControl('',[Validators.required]),
    sReceiverEmail:new FormControl('',[Validators.required]),
    // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)]")
    
    // Validators.pattern("/^+91(7\d|8\d|9\d)\d{9}$/")
   
    
       //"Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"

  })
  
  constructor(public router:Router,public service:WebService) { 
    this.imgFlag=false
    // console.log("Hello i am")

    // this.randomString = this.generateRandomString();
    // this.addorderOfUserObj=this.randomString
    // console.log(this.randomString)
  }
  ngOnInit()
  {
    this.randomString = this.generateRandomString();
    this.addorderOfUserObj.sAWBno=this.randomString
    // console.log(this.randomString)
  }
  generateRandomString() {
    const prefix = 'AWB2024';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomChars = '';
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomChars += characters[randomIndex];
    }
    
    return prefix + randomChars;
  }

  add()
    {
      // this.randomString=this.generateRandomString()
      // this.addorderOfUserObj.sAWBno=this.randomString
      console.log(this.addorderOfUserObj)
      this.service.postData({data:this.addorderOfUserObj},"?action=addOrder").then(res=>{
        var temp:any=res;
          console.log(res);
          if(temp.result==1)
            {
                alert("Order Added")
                this.router.navigateByUrl('dashboard')
            }
           
            else{
              this.router.navigateByUrl('dashboard')

            }
        });
       
    }
    CostCal()
    {
      console.log(this.addorderOfUserObj)
      this.addorderOfUserObj.dtotalcost=parseInt(((this.addorderOfUserObj).ddistance).toString()) * 2 + parseInt(((this.addorderOfUserObj).dVolume).toString())
    }
     takePicture1 = async () => {
      console.log("in")

      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });
    
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;
    
      // Can be set to the src of an image now
      this.imageElement = imageUrl;
      console.log(this.imageElement)


    };

   //  image to base64 function
   base64ToBlob(base64: any) {
    var parts = base64.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }

  // Function to convert Blob to File
  blobToFilenew(blob: any, fileName: any) {
    var file = new File([blob], fileName, { type: blob.type });
    return file;
  }

    takePicture = async () => {
      console.log("hi")
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });
  
      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      // var imageUrl: any = image.webPath;
      // console.log("image", imageUrl)
      var capturedPhoto = 'data:image/jpeg;base64,' + image.base64String;
      console.log('base64', image.base64String)
      var blob = this.base64ToBlob(capturedPhoto);
      var file = this.blobToFilenew(blob, "image.png");
  
      const formData = new FormData();
      formData.append('file', file);
      this.service.presentLoadingWithOptions()
      this.service.post_Method1('?action=insertimg', formData).then(res => {
        var temp: any = res;
        console.log("temp", temp)
  
        this.addorderOfUserObj.sImage = temp.imgurl
        this.img = temp.imgurl.replace('192.168.146.141', 'localhost');
        console.log("url", this.addorderOfUserObj)
        this.service.stopLoad()
        //  this.modal.dismiss()
        if (temp.result == 1) {
          this.imgFlag=true
        }
      });
    };
  
}
