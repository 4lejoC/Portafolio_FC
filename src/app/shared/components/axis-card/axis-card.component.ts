import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { NavigationItem } from '../../../core/models/site-page.model';

@Component({
  selector: 'app-axis-card',
  imports: [],
  templateUrl: './axis-card.component.html',
  styleUrl: './axis-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AxisCardComponent {
  readonly item = input.required<NavigationItem>();
}
