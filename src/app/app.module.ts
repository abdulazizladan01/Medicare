import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminComponent } from './dashboard/admin/admin.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { NurseComponent } from './dashboard/nurse/nurse.component';
import { PharmacistComponent } from './dashboard/pharmacist/pharmacist.component';
import { MessageComponent } from './dashboard/message/message.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { PatientDetailsComponent } from './dashboard/patient/patient-details/patient-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    DoctorComponent,
    NurseComponent,
    PharmacistComponent,
    MessageComponent,
    PatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
