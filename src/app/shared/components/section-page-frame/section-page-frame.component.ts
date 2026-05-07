import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavigationItem, SectionPageData } from '../../../core/models/site-page.model';
import { AxisCardComponent } from '../axis-card/axis-card.component';
import { AxisSectionComponent } from '../axis-section/axis-section.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';

@Component({
  selector: 'app-section-page-frame',
  imports: [AxisCardComponent, AxisSectionComponent, RouterLink, SiteHeaderComponent],
  templateUrl: './section-page-frame.component.html',
  styleUrl: './section-page-frame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionPageFrameComponent {
  readonly pageTitle = input.required<string>();
  readonly page = input.required<SectionPageData>();
  readonly navigationItems = input.required<NavigationItem[]>();

  readonly relatedItems = computed(() =>
    this.navigationItems().filter((item) => item.id !== this.page().id)
  );

  readonly standardCount = computed(() =>
    new Set(this.page().topics.flatMap((topic) => topic.standards)).size
  );
}
