import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpSignInComponent } from './sign-up-sign-in/sign-up-sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: SignUpSignInComponent },
  { path: 'signed-user', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}