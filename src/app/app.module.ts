import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
