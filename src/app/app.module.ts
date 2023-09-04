import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MsFormComponent } from './ms-form/ms-form.component';

@NgModule({
  declarations: [AppComponent, MsFormComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
