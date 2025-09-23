import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsChart } from './statics-chart';

describe('StaticsChart', () => {
  let component: StaticsChart;
  let fixture: ComponentFixture<StaticsChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticsChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
