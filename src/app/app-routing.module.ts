import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { OverviewComponent } from './overview/overview.component';



const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'user', component: UserComponent },
  {path: 'user/:id', component: UserDetailComponent },
  {path: 'overview', component: OverviewComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
