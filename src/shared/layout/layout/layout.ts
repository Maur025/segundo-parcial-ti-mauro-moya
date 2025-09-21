import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Backdrop } from '../backdrop/backdrop';
import { SidebarService } from '../../services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, Header, Sidebar, Backdrop],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  public readonly isExpanded$: Observable<boolean>;
  public readonly isHovered$: Observable<boolean>;
  public readonly isMobileOpen$: Observable<boolean>;

  private readonly sidebarService = inject(SidebarService);

  constructor() {
    this.isExpanded$ = this.sidebarService.isExpanded$;
    this.isHovered$ = this.sidebarService.isHovered$;
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  get containerClasses() {
    return [
      'flex-1',
      'transition-all',
      'duration-300',
      'ease-in-out',
      this.isExpanded$ || this.isHovered$ ? 'xl:ml-[290px]' : 'xl:ml-[90px]',
      this.isMobileOpen$ ? 'ml-0' : '',
    ];
  }
}
