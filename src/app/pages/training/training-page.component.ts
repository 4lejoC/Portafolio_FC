import { ChangeDetectionStrategy, Component } from '@angular/core';

import { homePage } from '../../core/data/home-page.data';
import { navigationItems } from '../../core/data/navigation-items.data';
import { trainingPage } from '../../core/data/training-page.data';
import { SectionPageFrameComponent } from '../../shared/components/section-page-frame/section-page-frame.component';

@Component({
  selector: 'app-training-page',
  imports: [SectionPageFrameComponent],
  templateUrl: './training-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingPageComponent {
  protected readonly pageTitle = homePage.title;
  protected readonly page = trainingPage;
  protected readonly navigationItems = navigationItems;
}
