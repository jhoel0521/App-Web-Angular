import { Routes } from '@angular/router';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: '**', redirectTo: '' }
];
