import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiExample } from './ui-example';

describe('UiExample', () => {
  let component: UiExample;
  let fixture: ComponentFixture<UiExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
