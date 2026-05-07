import { Routes } from '@angular/router';

import { CybersecurityPageComponent } from './pages/cybersecurity/cybersecurity-page.component';
import { GovernancePageComponent } from './pages/governance/governance-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { InformationSecurityPageComponent } from './pages/information-security/information-security-page.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';
import { TrainingPageComponent } from './pages/training/training-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'proyectos',
    component: ProjectsPageComponent
  },
  {
    path: 'ciberseguridad',
    component: CybersecurityPageComponent
  },
  {
    path: 'seguridad-informacion',
    component: InformationSecurityPageComponent
  },
  {
    path: 'gobernanza-tic',
    component: GovernancePageComponent
  },
  {
    path: 'capacitacion',
    component: TrainingPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
