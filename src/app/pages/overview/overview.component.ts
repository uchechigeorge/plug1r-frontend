import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverviewCardComponent } from '../../components/overview-card/overview-card.component';
import { OverviewBarChartComponent } from '../../components/overview-bar-chart/overview-bar-chart.component';
import { OverviewCircleChartComponent } from '../../components/overview-circle-chart/overview-circle-chart.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    ButtonModule,
    OverviewCardComponent,
    OverviewBarChartComponent,
    OverviewCircleChartComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
