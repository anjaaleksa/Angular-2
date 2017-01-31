import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { ThirdComponent } from './third/third.component';
import { AnotherComponent } from './other/another.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    ThirdComponent,
    AnotherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
