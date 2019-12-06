import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PlaygroundTemplateDrivenFormsComponent } from './playground-template-driven-forms-component/playground-template-driven-forms-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundTemplateDrivenFormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
