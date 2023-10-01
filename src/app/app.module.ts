import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsAppliedComponent } from './pages/dashboard/jobs-applied/jobs-applied.component';
import { EditProfileComponent } from './pages/dashboard/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    JobListComponent,
    JobDetailComponent,
    DashboardComponent,
    NavbarComponent,
    JobsAppliedComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
