import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationItem } from '../../../core/models/site-page.model';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeaderComponent {
  readonly items = input.required<NavigationItem[]>();
}
