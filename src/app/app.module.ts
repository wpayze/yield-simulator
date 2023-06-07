import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YieldNetReturnComponent } from './yield-net-return/yield-net-return.component';

@NgModule({
  declarations: [
    AppComponent,
    YieldNetReturnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
