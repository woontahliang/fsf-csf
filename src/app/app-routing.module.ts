import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { DisplayFormComponent } from './components/display-form/display-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'display', component: DisplayFormComponent },
  { path: '**', redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationFormComponent, DisplayFormComponent]