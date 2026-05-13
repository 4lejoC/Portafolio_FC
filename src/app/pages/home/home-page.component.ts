import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { homePage } from '../../core/data/home-page.data';
import { navigationItems } from '../../core/data/navigation-items.data';
import { AxisCardComponent } from '../../shared/components/axis-card/axis-card.component';
import { HeroPanelComponent } from '../../shared/components/hero-panel/hero-panel.component';
import { SiteHeaderComponent } from '../../shared/components/site-header/site-header.component';

@Component({
  selector: 'app-home-page',
  imports: [AxisCardComponent, HeroPanelComponent, RouterLink, SiteHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly page = homePage;
  protected readonly navigationItems = navigationItems;
  protected readonly coverVisualSrc = '/report-visuals/portada.png';
  protected readonly coverVisualAlt =
    'Escena comercial de consultoría y planificación para el portafolio de servicios de PRO3';
}
