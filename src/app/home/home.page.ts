import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  home()
    {
      this.router.navigateByUrl('home/homepage')
    }
    aboutus()
    {
      this.router.navigateByUrl('home/aboutus')
    }
    dashboard()
    {
      this.router.navigateByUrl('dashboard')
    }
    splitservices()
    {
      this.router.navigateByUrl('home/splitservices')
    }
    Contact()
    {
      console.log("in")
      this.router.navigateByUrl('home/contact')
    }
    
    login()
    {
      this.router.navigateByUrl('home/login')
    }
    track()
    {
      this.router.navigateByUrl('home/trackingfirst') 
    }

}
