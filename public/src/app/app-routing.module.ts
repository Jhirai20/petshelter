import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PollComponent } from './poll/poll.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: "pets", component:DashboardComponent },
  {path: "pets/:id/edit", component: HomeComponent},
  {path: "pets/new", component: CreateComponent},
  {path: "pets/:id", component: PollComponent},
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

