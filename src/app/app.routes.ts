import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { Plato } from './plato/plato.component';
import { VerPlatos } from './plato/verplatos.component';
import { Pedido } from './pedido/pedido.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: Home,
        title: 'Inicio - NEGOCIOK'
    },
    {
        path: 'anadir-plato',
        component: Plato,
        title: 'Agregar Plato - NEGOCIOK'
    },
    {
        path: 'platos',
        component: VerPlatos,
        title: 'Ver Platos - NEGOCIOK'
    },
  {
    path: 'pedido',
    component: Pedido,
    title: 'Pedido - NEGOCIOK'
  }
];
