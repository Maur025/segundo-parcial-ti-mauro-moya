import { Component } from '@angular/core';
import { EcommerceMetrics } from '../../shared/components/ecommerce-metrics/ecommerce-metrics';
import { MonthlySalesChart } from '../../shared/components/monthly-sales-chart/monthly-sales-chart';
import { MonthlyTarget } from '../../shared/components/monthly-target/monthly-target';
import { StaticsChart } from '../../shared/components/statics-chart/statics-chart';

@Component({
  selector: 'app-dashboard',
  imports: [EcommerceMetrics, MonthlySalesChart, MonthlyTarget, StaticsChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
