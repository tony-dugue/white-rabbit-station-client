import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'connexion', component: LoginComponent },
  { path: 'creation-compte', component: RegisterComponent },
  { path: 'accueil', component: HomeComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  //{ path: '**', component: NoFoundComponent },
];
