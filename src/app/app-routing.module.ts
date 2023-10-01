import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { JobsAppliedComponent } from './pages/dashboard/jobs-applied/jobs-applied.component';
import { EditProfileComponent } from './pages/dashboard/edit-profile/edit-profile.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent},
  { path: 'jobs/:id', component: JobDetailComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'jobs-applied',
        component: JobsAppliedComponent,
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent
      }
    ],
    canActivate: [authGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
