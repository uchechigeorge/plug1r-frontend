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
  selector: 'app-overview-bar-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './overview-bar-chart.component.html',
  styleUrl: './overview-bar-chart.component.scss',
})
export class OverviewBarChartComponent {
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
      const textColorSecondary = documentStyle.getPropertyValue(
        '--p-text-muted-color'
      );
      const surfaceBorder = documentStyle.getPropertyValue(
        '--p-content-border-color'
      );

      this.data = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'D1',
            backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
            borderColor: documentStyle.getPropertyValue('--p-primary-500'),
            data: [65, 59, 80, 81, 56, 55, 40, 88, 22, 55, 66, 55],
          },
          {
            label: 'D2',
            backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
            borderColor: documentStyle.getPropertyValue('--p-primary-300'),
            data: [28, 48, 40, 19, 86, 27, 90, 60, 54, 44, 77, 32],
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
          title: {
            display: true,
            align: 'start',
            text: 'Monthly Listeners',
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
