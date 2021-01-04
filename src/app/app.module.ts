import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { Navbar } from './frontend/navbar/navbar';
import { ThemeService } from './frontend/theme.service'
import { AccountService } from './frontend/account.service'

import { MaterialModule } from './material-module'

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ThemeService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
