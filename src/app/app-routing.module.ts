import { NgModule } from '@angular/core';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { AddorderComponent } from './home/addorder/addorder.component';
import { ContactComponent } from './home/contact/contact.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { LoginComponent } from './home/login/login.component';
import { MakecomplaintComponent } from './home/makecomplaint/makecomplaint.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { UpdatepasswordComponent } from './home/updatepassword/updatepassword.component';
import { ViewallshippmentComponent } from './home/viewallshippment/viewallshippment.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
