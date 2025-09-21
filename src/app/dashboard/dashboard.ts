import { Component } from '@angular/core';
import { EcommerceMetrics } from '../../shared/components/ecommerce-metrics/ecommerce-metrics';

@Component({
  selector: 'app-dashboard',
  imports: [EcommerceMetrics],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
