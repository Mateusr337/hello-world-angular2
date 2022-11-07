import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first-component/my-first-compomemt.component';
import { MyFirstComponentCliComponent } from './my-first-component-cli/my-first-component-cli.component';

@NgModule({
  declarations: [AppComponent, MyFirstComponent, MyFirstComponentCliComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
