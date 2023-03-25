import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // 導入 FormsModule
import { AppComponent } from './app.component';

import { BmiComponent } from './bmi/bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // 導入 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
