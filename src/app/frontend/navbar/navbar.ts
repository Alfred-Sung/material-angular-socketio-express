import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class Navbar implements OnInit {
    isDarkTheme!: Observable<boolean>;
    themeIcon = "light_mode";

    title = "Mock messaging board"

    constructor(private themeService: ThemeService, private accountService: AccountService) { }

    ngOnInit() {
        this.isDarkTheme = this.themeService.isDarkTheme;
        this.accountService.setUsername("Guest");
    }
    
    changeUsername(username: string) {
        this.accountService.setUsername(username);
    }

    toggleDarkTheme(checked: boolean) {
      this.themeService.setDarkTheme(checked);
      this.themeIcon = checked ? "dark_mode" : "light_mode";
    }
}
