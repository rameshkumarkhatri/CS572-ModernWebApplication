import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormDataDrivenComponent } from './login-form-data-driven/login-form-data-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormDataDrivenComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
