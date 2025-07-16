import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';
import { CardproductosComponent } from './components/cardproductos/cardproductos.component';
import { CardbuscadorComponent } from './components/cardbuscador/cardbuscador.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: CardproductosComponent },
    { path: 'producto:id', component: CardproductoComponent },
    { path: 'buscar:termino', component: CardbuscadorComponent }, 
    { path: 'About', component: AboutComponent },
    { path: '**', redirectTo: '' }
];
