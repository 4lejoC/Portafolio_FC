import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SectionPageData } from '../../../core/models/site-page.model';

@Component({
  selector: 'app-chapter-diagram',
  templateUrl: './chapter-diagram.component.html',
  styleUrl: './chapter-diagram.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterDiagramComponent {
  readonly page = input.required<SectionPageData>();
}
