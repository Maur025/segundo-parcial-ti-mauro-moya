import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTab } from './chart-tab';

describe('ChartTab', () => {
  let component: ChartTab;
  let fixture: ComponentFixture<ChartTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartTab]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
