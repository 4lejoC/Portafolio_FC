import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

import { navigationItems } from '../../core/data/navigation-items.data';
import { SectionPageData } from '../../core/models/site-page.model';
import { SectionPageFrameComponent } from '../../shared/components/section-page-frame/section-page-frame.component';

@Component({
  selector: 'app-service-page',
  imports: [SectionPageFrameComponent],
  template: `
    <app-section-page-frame
      [page]="page()"
      [navigationItems]="navigationItems"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicePageComponent {
  protected readonly navigationItems = navigationItems;

  private readonly route = inject(ActivatedRoute);

  protected readonly page = toSignal(
    this.route.data.pipe(map((data) => data['page'] as SectionPageData)),
    { initialValue: this.route.snapshot.data['page'] as SectionPageData }
  );
}
