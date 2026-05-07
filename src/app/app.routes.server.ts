import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'proyectos',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'ciberseguridad',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'seguridad-informacion',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'gobernanza-tic',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'capacitacion',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
