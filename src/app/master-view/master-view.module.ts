import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { View2Component } from './view2/view2.component';
import { View1Component } from './view1/view1.component';
import { View3Component } from './view3/view3.component';
import { IgxNavbarModule, IgxButtonModule, IgxIconModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    MasterViewComponent,
    View2Component,
    View1Component,
    View3Component
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxIconModule,
    FormsModule
  ]
})
export class MasterViewModule {
}
