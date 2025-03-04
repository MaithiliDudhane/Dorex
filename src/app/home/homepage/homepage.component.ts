import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent   {
  constructor(public router:Router) { }
  
  
 
  
  login()
  {
    this.router.navigateByUrl('home/login')
  }
  

}
