import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { UiModule } from '@nx-tutorial/ui';
import { SystemNavigatorModule } from '@nx-tutorial/system-navigator';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, UiModule, SystemNavigatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
