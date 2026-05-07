import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SectionPageData } from '../../../core/models/site-page.model';

@Component({
  selector: 'app-axis-section',
  imports: [],
  templateUrl: './axis-section.component.html',
  styleUrl: './axis-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisSectionComponent {
  readonly page = input.required<SectionPageData>();
}
