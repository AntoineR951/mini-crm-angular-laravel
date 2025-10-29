import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients';

export const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
];
