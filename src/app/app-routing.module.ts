import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { NurseComponent } from './dashboard/nurse/nurse.component';
import { PharmacistComponent } from './dashboard/pharmacist/pharmacist.component';


const routes: Routes = [
  {path : '',
  component : LoginComponent
  },
  {path : 'admin',
  component : AdminComponent
  },
  {path : 'doctor',
  component : DoctorComponent
  },
  {path : 'nurse',
  component : NurseComponent
  },
  {path : 'pharmacist',
  component : PharmacistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
