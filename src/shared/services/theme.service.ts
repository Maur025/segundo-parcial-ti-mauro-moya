import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSubject = new BehaviorSubject<Theme>('light');
  theme$ = this.themeSubject.asObservable();
  private readonly isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedTheme = (localStorage.getItem('theme') as Theme) || 'light';
      this.setTheme(savedTheme);
    }
  }

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);

    if (this.isBrowser) {
      localStorage.setItem('theme', theme);

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark:bg-gray-900');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark:bg-gray-900');
      }
    }
  }
}
