import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-overview-card',
    imports: [CommonModule, CardModule, TagModule],
    templateUrl: './overview-card.component.html',
    styleUrl: './overview-card.component.scss',
    host: { class: 'contents' }
})
export class OverviewCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() showBadge: boolean = false;
  @Input() badgeText: string = '100%';
}
