import { RenderMode, ServerRoute } from '@angular/ssr';
import { sectionPages } from './core/data/section-pages.data';

const prerenderedSectionRoutes: ServerRoute[] = sectionPages.map((page) => ({
  path: page.route.slice(1),
  renderMode: RenderMode.Prerender
}));

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  ...prerenderedSectionRoutes,
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
