import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddorderComponent } from './addorder/addorder.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MakecomplaintComponent } from './makecomplaint/makecomplaint.component';
import { RegistrationComponent } from './registration/registration.component';
import { SplitservicesComponent } from './splitservices/splitservices.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { ViewallshippmentComponent } from './viewallshippment/viewallshippment.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { AnswercomplaintComponent } from './answercomplaint/answercomplaint.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { CancelorderComponent } from './cancelorder/cancelorder.component';
import { SearchPipe } from './search.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { StatusComponent } from './status/status.component';
import { GodavanComponent } from './godavan/godavan.component';
import { CancelShippmentComponent } from './cancel-shippment/cancel-shippment.component';
import { TrackingfirstComponent } from './trackingfirst/trackingfirst.component';
import { TrackingsecondComponent } from './trackingsecond/trackingsecond.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // IonicModule.forRoot(),
    HomePageRoutingModule,
    IonicModule,
    
  ],
  declarations: [HomePage,ContactComponent,AboutusComponent,AddorderComponent,FeedbackComponent,ForgotpasswordComponent,HomepageComponent,LoginComponent,MakecomplaintComponent,RegistrationComponent,SplitservicesComponent,UpdatepasswordComponent,ViewallshippmentComponent,ViewcomplaintComponent,AnswercomplaintComponent,FeedbackformComponent,CancelorderComponent, SearchPipe,StatusComponent,GodavanComponent,CancelShippmentComponent,TrackingfirstComponent,TrackingsecondComponent],
schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
})
export class HomePageModule {}
