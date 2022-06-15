import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InAppRoutingModule } from './in-app-routing.module';
import { InAppComponent } from './in-app.component';
import { ArticlesComponent } from './articles/articles.component';
import { IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxGridModule, IgxToggleModule, IgxAvatarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    InAppComponent,
    ArticlesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    InAppRoutingModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    FormsModule,
    IgxGridModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxNavigationDrawerModule
  ]
})
export class InAppModule {
}
