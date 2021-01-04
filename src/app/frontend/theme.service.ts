import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ThemeService {
  isDarkTheme = new Subject<boolean>();

  setDarkTheme(_isDarkTheme: boolean): void { this.isDarkTheme.next(_isDarkTheme); }
}