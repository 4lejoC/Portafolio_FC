import { ChangeDetectionStrategy, Component } from '@angular/core';

import { governancePage } from '../../core/data/governance-page.data';
import { homePage } from '../../core/data/home-page.data';
import { navigationItems } from '../../core/data/navigation-items.data';
import { SectionPageFrameComponent } from '../../shared/components/section-page-frame/section-page-frame.component';

@Component({
  selector: 'app-governance-page',
  imports: [SectionPageFrameComponent],
  templateUrl: './governance-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GovernancePageComponent {
  protected readonly pageTitle = homePage.title;
  protected readonly page = governancePage;
  protected readonly navigationItems = navigationItems;
}
