import { Routes } from '@angular/router';
import { Layout } from '../shared/layout/layout/layout';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashboard,
        pathMatch: 'full',
        title: 'Dashboard | Segundo Parcial',
      },
    ],
  },
];
