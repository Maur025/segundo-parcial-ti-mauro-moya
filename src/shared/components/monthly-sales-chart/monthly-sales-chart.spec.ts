import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySalesChart } from './monthly-sales-chart';

describe('MonthlySalesChart', () => {
  let component: MonthlySalesChart;
  let fixture: ComponentFixture<MonthlySalesChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlySalesChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlySalesChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
