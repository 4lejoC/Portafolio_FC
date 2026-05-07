import { ChangeDetectionStrategy, Component } from '@angular/core';

import { cybersecurityPage } from '../../core/data/cybersecurity-page.data';
import { homePage } from '../../core/data/home-page.data';
import { navigationItems } from '../../core/data/navigation-items.data';
import { SectionPageFrameComponent } from '../../shared/components/section-page-frame/section-page-frame.component';

@Component({
  selector: 'app-cybersecurity-page',
  imports: [SectionPageFrameComponent],
  templateUrl: './cybersecurity-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CybersecurityPageComponent {
  protected readonly pageTitle = homePage.title;
  protected readonly page = cybersecurityPage;
  protected readonly navigationItems = navigationItems;
}
