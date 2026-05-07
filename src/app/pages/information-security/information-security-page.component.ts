import { ChangeDetectionStrategy, Component } from '@angular/core';

import { homePage } from '../../core/data/home-page.data';
import { informationSecurityPage } from '../../core/data/information-security-page.data';
import { navigationItems } from '../../core/data/navigation-items.data';
import { SectionPageFrameComponent } from '../../shared/components/section-page-frame/section-page-frame.component';

@Component({
  selector: 'app-information-security-page',
  imports: [SectionPageFrameComponent],
  templateUrl: './information-security-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationSecurityPageComponent {
  protected readonly pageTitle = homePage.title;
  protected readonly page = informationSecurityPage;
  protected readonly navigationItems = navigationItems;
}
