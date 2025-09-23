import { Routes } from '@angular/router';
import { Layout } from '../shared/layout/layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { UiExample } from './ui-example/ui-example';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashboard,
        title: 'Dashboard | Segundo Parcial',
      },
      {
        path: 'ui',
        component: UiExample,
        title: 'UI Example | Segundo Parcial',
      },
    ],
  },
];
