import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppComponent } from './in-app.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: InAppComponent, children: [{ path: 'articles', component: ArticlesComponent, data: { text: 'Articles' } }, { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InAppRoutingModule {
}
