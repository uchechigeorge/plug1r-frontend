import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCircleChartComponent } from './overview-circle-chart.component';

describe('OverviewCircleChartComponent', () => {
  let component: OverviewCircleChartComponent;
  let fixture: ComponentFixture<OverviewCircleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewCircleChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewCircleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
