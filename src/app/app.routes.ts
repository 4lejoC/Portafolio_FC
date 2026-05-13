import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { sectionPages } from './core/data/section-pages.data';

const serviceRoutes: Routes = sectionPages.map((page) => ({
  path: page.route.slice(1),
  component: ServicePageComponent,
  data: { page }
}));

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  ...serviceRoutes,
  {
    path: '**',
    redirectTo: ''
  }
];
