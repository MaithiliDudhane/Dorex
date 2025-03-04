import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpHeaders } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//192.168.1.20
export class WebService{
//   apiUrl = 'http://192.168.146.141/api/webservicesOfShip.php';
  apiUrl = 'http://localhost/api/webservicesOfShip.php';

  auth:any;
  updateId:any;
  addFlag=false;
  trackingObj:any=[]
  private selectedLanguage = new Subject<string>();
  
  // httpOptions = {
  //     headers: new HttpHeaders({
  //         'Content-Type': 'application/json'
  //     })
  // }
  
  constructor(public http: HttpClient,private toastController:ToastController,public loadingController: LoadingController) { 
  
  }
  
  public getLanguageObservable(): Observable<string> {
      return this.selectedLanguage.asObservable();
  }
  
  public setLanguageData(data: string) {
      this.selectedLanguage.next(data);
  }
  
  getData(credentials: any, type: string) {
      var httpOptions = 
    {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth
  
        })
    }
  
  
      return new Promise((resolve, reject) => {
          console.log(this.apiUrl + type);
          console.log(credentials);
          this.http.get(this.apiUrl + type, httpOptions)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }
  getSig(credentials: any, type: string) {
      var httpOptions = 
    {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.auth
  
        })
    }
  
  
      return new Promise((resolve, reject) => {
          // console.log(this.apiUrlz + type);
          console.log(credentials);
          this.http.get(this.apiUrl + type, httpOptions)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }
  
  postData(credentials: any, type: any) {
      var httpOptions = 
      {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth
  
          })
      }
      var header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Accept', 'application/json');
      return new Promise((resolve, reject) => {
          //   console.log(apiUrl);
          //   console.log(credentials);
          this.http.post(this.apiUrl + type, credentials, httpOptions)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }
  
  post_Method1(type: string, data: any) {
      //this.auth=localStorage.getItem("auth");
      //console.log(this.auth);
      var httpOptionsnew = {
       
      }
      
      return new Promise((resolve, reject) => {
        console.log(this.apiUrl);
        console.log(data);
        this.http.post(this.apiUrl + type, data,httpOptionsnew)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            console.log(err.error);
            //this.openToast(err.error.error);
            
            reject(err);
            
          });
      });
    }
    
  deleteData(credentials: any, type: any) {
      var header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Accept', 'application/json');
      return new Promise((resolve, reject) => {
          this.http.delete(this.apiUrl + type, credentials)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err)
              });
      });
  }
  
  putData(credentials: any, type: any) {
      var httpOptions = 
      {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + this.auth
  
          })
      }
      var header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append('Accept', 'application/json');
      return new Promise((resolve, reject) => {
          this.http.put(this.apiUrl + type, credentials, httpOptions)
              .subscribe(res => {
                  resolve(res);
              }, (err) => {
                  reject(err);
              });
      });
  }
  
  
    async presentToastWithOptions(msg: any) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 1000,
        icon: 'information-circle',
        position: 'top',
      });
      toast.present();
    }
  
    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: 'circles',
        duration: 2000,
        message: 'Loading...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }
  
    stopLoad(){
      this.loadingController.dismiss()
    }
    fcm_token = {
      //"fcm_token":"fDc1gVAxTFufjfQvbgXQx9:APA91bE7LLou7xZpa1wrY7hlmafsG0F2nxIljkn-_O33Haj-khbOq9sYKCE2dq0ZG9ctHrMZ5KbDbE8VyCZBMS4g0hkI8g28njbbnBqkGPZSGmvepgWS9lVCukY9bbG0CoIFIH4uoi4A"
      action:"addFCMToken",
      fcmtoken : "",
      os:""
    };
}
