import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavigationItem, SectionPageData } from '../../../core/models/site-page.model';
import { AxisSectionComponent } from '../axis-section/axis-section.component';
import { ChapterDiagramComponent } from '../chapter-diagram/chapter-diagram.component';
import { SiteHeaderComponent } from '../site-header/site-header.component';

@Component({
  selector: 'app-section-page-frame',
  imports: [AxisSectionComponent, ChapterDiagramComponent, RouterLink, SiteHeaderComponent],
  templateUrl: './section-page-frame.component.html',
  styleUrl: './section-page-frame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionPageFrameComponent {
  readonly page = input.required<SectionPageData>();
  readonly navigationItems = input.required<NavigationItem[]>();

  readonly chapterVisualSrc = computed(() => `/report-visuals/${this.page().id}.png`);
  readonly chapterVisualAlt = computed(
    () => `Visual comercial del eje de ${this.page().title} para el portafolio de PRO3`
  );
}
