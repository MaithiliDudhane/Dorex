import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddorderComponent } from './addorder/addorder.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { MakecomplaintComponent } from './makecomplaint/makecomplaint.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ViewallshippmentComponent } from './viewallshippment/viewallshippment.component';
import { SplitservicesComponent } from './splitservices/splitservices.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { AnswercomplaintComponent } from './answercomplaint/answercomplaint.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { StatusComponent } from './status/status.component';
import { GodavanComponent } from './godavan/godavan.component';
import { CancelShippmentComponent } from './cancel-shippment/cancel-shippment.component';
import { TrackingfirstComponent } from './trackingfirst/trackingfirst.component';
import { TrackingsecondComponent } from './trackingsecond/trackingsecond.component';

const routes: Routes = [
  {
    path: '',
    component:HomepageComponent,
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'addorder',
    component:AddorderComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'feedback',
    component:FeedbackComponent,
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'makecomplaint',
    component:MakecomplaintComponent,
  },
  {
    path:'homepage',
    component:HomepageComponent,
  },
  {
    path:'registration',
    component:RegistrationComponent,
  },
  {
    path:'updatepassword',
    component:UpdatepasswordComponent,
  },
  {
    path:'viewallshippment',
    component:ViewallshippmentComponent,
  },
  {
    path:'splitservices',
    component:SplitservicesComponent,
  },
  {
    path:'viewcomplaint',
    component:ViewcomplaintComponent,
  },
  {
    path:'answercomplaint',
    component:AnswercomplaintComponent,
  },
  {
    path:'feedbackform',
    component:FeedbackformComponent,
  },
  {
    path:'cancelorder',
    component:CancelorderComponent,
  },
  {
    path:'status',
    component:StatusComponent,
  },
  {
    path:'godavan',
    component:GodavanComponent,
  },
  {
    path:'cancel-shippment',
    component:CancelShippmentComponent,
  },
  {
    path:'trackingfirst',
    component:TrackingfirstComponent
  },
  {
    path:'trackingsecond',
    component:TrackingsecondComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
