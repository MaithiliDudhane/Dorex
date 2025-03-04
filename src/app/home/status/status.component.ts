import { Component } from '@angular/core';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent   {
myDropDown:any
  city:any
  cities:any=[]
  obj={
    sCity:""
  }
  godowns:any=[]
  constructor(public service:WebService) {
    this.getGodown()
   }

  

  getGodown()
  {
    this.service.presentLoadingWithOptions();
       this.service.getData({},"?action=getGodavan").then(res=>{
       var temp:any=res;  
       this.service.stopLoad();
       this.godowns=temp.records;
       console.log(this.godowns)
       });
  }
  addCity()
  {
    console.log(this.obj)
    console.log(this.city)
    this.cities.push(this.obj.sCity)
    console.log(this.cities)

  }
  onChangeofOptions(a:any)
  {
    this.city=a
    console.log(this.city)
    console.log(this.cities)
  }
}
