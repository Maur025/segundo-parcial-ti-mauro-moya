import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceMetrics } from './ecommerce-metrics';

describe('EcommerceMetrics', () => {
  let component: EcommerceMetrics;
  let fixture: ComponentFixture<EcommerceMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
