import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxCheckboxModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    ResetPasswordComponent,
    LoginComponent,
    SignUpComponent,
    SetNewPasswordComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxCheckboxModule
  ]
})
export class HomeModule {
}
