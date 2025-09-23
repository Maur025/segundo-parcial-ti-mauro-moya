import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { ThemeToggleButton } from '../../components/theme-toggle-button/theme-toggle-button';
import { NotificationDropdown } from '../../components/notification-dropdown/notification-dropdown';
import { UserDropdown } from '../../components/user-dropdown/user-dropdown';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ThemeToggleButton, NotificationDropdown, UserDropdown],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit, OnDestroy {
  isApplicationMenuOpen = false;
  readonly isMobileOpen$;

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(public sidebarService: SidebarService) {
    this.isMobileOpen$ = this.sidebarService.isMobileOpen$;
  }

  handleToggle() {
    if (window.innerWidth >= 1280) {
      this.sidebarService.toggleExpanded();
    } else {
      this.sidebarService.toggleMobileOpen();
    }
  }

  toggleApplicationMenu() {
    this.isApplicationMenuOpen = !this.isApplicationMenuOpen;
  }

  ngAfterViewInit() {
    // document?.addEventListener('keydown', this.handleKeyDown);
  }

  ngOnDestroy() {
    // document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      this.searchInput?.nativeElement.focus();
    }
  };
}
