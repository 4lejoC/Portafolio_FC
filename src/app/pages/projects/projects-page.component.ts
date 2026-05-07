import { ChangeDetectionStrategy, Component } from '@angular/core';

import { navigationItems } from '../../core/data/navigation-items.data';
import { projectsPage } from '../../core/data/projects-page.data';
import { homePage } from '../../core/data/home-page.data';
import { SectionPageFrameComponent } from '../../shared/components/section-page-frame/section-page-frame.component';

@Component({
  selector: 'app-projects-page',
  imports: [SectionPageFrameComponent],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent {
  protected readonly pageTitle = homePage.title;
  protected readonly page = projectsPage;
  protected readonly navigationItems = navigationItems;
}
