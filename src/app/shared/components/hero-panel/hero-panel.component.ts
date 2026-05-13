import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SiteMetric } from '../../../core/models/site-page.model';

@Component({
  selector: 'app-hero-panel',
  imports: [],
  templateUrl: './hero-panel.component.html',
  styleUrl: './hero-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPanelComponent {
  readonly kicker = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly description = input.required<string>();
  readonly metrics = input.required<SiteMetric[]>();
  readonly featurePath = input.required<string>();
  readonly visualSrc = input<string>();
  readonly visualAlt = input('');
}
