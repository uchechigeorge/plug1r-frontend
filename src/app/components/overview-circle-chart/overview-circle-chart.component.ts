import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  PLATFORM_ID,
  ChangeDetectorRef,
  inject,
  effect,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
// import { AppConfigService } from '@/service/appconfigservice';

@Component({
    selector: 'app-overview-circle-chart',
    imports: [ChartModule],
    templateUrl: './overview-circle-chart.component.html',
    styleUrl: './overview-circle-chart.component.scss'
})
export class OverviewCircleChartComponent {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  // configService = inject(AppConfigService);

  // designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) {}

  // themeEffect = effect(() => {
  //     if (this.configService.transitionComplete()) {
  //         if (this.designerService.preset()) {
  //             this.initChart();
  //         }
  //     }
  // });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      this.data = {
        labels: ['Femi', 'John', 'Mary'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-blue-500'),
              documentStyle.getPropertyValue('--p-red-500'),
              documentStyle.getPropertyValue('--p-green-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-blue-400'),
              documentStyle.getPropertyValue('--p-red-400'),
              documentStyle.getPropertyValue('--p-green-400'),
            ],
          },
        ],
      };

      this.options = {
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
          title: {
            display: true,
            align: 'start',
            text: 'Top Listeners',
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
