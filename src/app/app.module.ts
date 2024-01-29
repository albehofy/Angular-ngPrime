import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/tecket-header/top-bar/top-bar.component';
import { TecketHeaderComponent } from './Components/tecket-header/tecket-header.component';
import { ChartComponent } from './Components/tecket-header/chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    TecketHeaderComponent,
    TopBarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
